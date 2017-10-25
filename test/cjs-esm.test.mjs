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
  const expectedOutput = ['the handle', 'the spout', 'hot tea'].join('\n')
  it('simple import/export, no default', async () => {
    expect(execWithEsm('cjs', '01-main-no-default.js')).to.equal(expectedOutput)

    expect(execWithEsm('esm', '01a-main-no-default.mjs'))
      .to.include('error:')
      .and.to.include('require is not defined')

    expect(execWithEsm('esm', '01-main-no-default.mjs')).to.include(expectedOutput)
  })

  it('binding', async () => {
    expect(execWithEsm('cjs', '02-main-binding.js')).to.equal(expectedOutput)

    expect(execWithEsm('esm', '02-main-binding.mjs')).to.equal(
      expectedOutput.replace('hot', 'scalding'),
    )
  })

  it('default', async () => {
    expect(execWithEsm('cjs', '03-main-default.js')).to.equal(expectedOutput)

    expect(execWithEsm('esm', '03-main-default.mjs')).to.equal(expectedOutput)
  })
})

function execWithEsm(...segments) {
  try {
    return execFileSync('node', ['--experimental-modules', path.join('src', ...segments)], {
      stdio: 'pipe',
    })
      .toString()
      .trim()
  } catch (err) {
    return `error: ${err.message}`
  }
}
