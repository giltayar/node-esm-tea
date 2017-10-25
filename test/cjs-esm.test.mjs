'use strict'
import util from 'util'
import path from 'path'
import childProcess from 'child_process'
import mocha from 'mocha'
import chai from 'chai'

const {promisify: p} = util
const {execFileSync} = childProcess
const {describe, it} = mocha
const {expect} = chai

describe('cjs-esm differences', function() {
  const expectedOutput = ['the handle', 'the spout', 'hot tea']
  const expectedScaldingOutput = ['the handle', 'the spout', 'scalding tea']

  describe('syntax', () => {
    it('simple import/export, no default', async () => {
      expect(execWithEsm('cjs', '01-main-named.js')).to.eql(expectedOutput)

      expect(execWithEsm('esm', '01a-main-named.mjs'))
        .to.include('error:')
        .and.to.include('require is not defined')

      expect(execWithEsm('esm', '01-main-named.mjs')).to.eql(expectedOutput)
    })

    it('binding', async () => {
      expect(execWithEsm('cjs', '02-main-binding.js')).to.eql(expectedOutput)

      expect(execWithEsm('esm', '02-main-binding.mjs')).to.eql(expectedScaldingOutput)
    })

    it('default', async () => {
      expect(execWithEsm('cjs', '03-main-default.js')).to.eql(expectedOutput)

      expect(execWithEsm('esm', '03-main-default.mjs')).to.eql(expectedOutput)
    })

    it('default plus', async () => {
      expect(execWithEsm('cjs', '04-main-default-plus.js')).to.eql(
        expectedOutput.concat('the pot is black'),
      )

      expect(execWithEsm('esm', '04-main-default-plus.mjs')).to.eql(
        expectedOutput.concat('the pot is black'),
      )
    })

    it('renaming', async () => {
      expect(execWithEsm('cjs', '05-main-renamed.js')).to.eql(expectedOutput)

      expect(execWithEsm('esm', '05-main-renamed.mjs')).to.eql(expectedOutput)
    })
  })

  describe('resolution', () => {
    it('folder with index.*', async () => {
      expect(execWithEsm('cjs', '06-main-dir-index.js')).to.eql(expectedOutput)

      expect(execWithEsm('esm', '06-main-dir-index.mjs')).to.eql(expectedOutput)
    })
    it('folder with package.json', async () => {
      expect(execWithEsm('cjs', '07-main-dir-package.js')).to.eql(expectedOutput)

      expect(execWithEsm('esm', '07-main-dir-package.mjs')).to.eql(expectedOutput)
    })
  })
})

function execWithEsm(...segments) {
  try {
    return execFileSync('node', ['--experimental-modules', path.join('src', ...segments)], {
      stdio: 'pipe',
    })
      .toString()
      .trim()
      .split('\n')
  } catch (err) {
    return `error: ${err.message}`
  }
}
