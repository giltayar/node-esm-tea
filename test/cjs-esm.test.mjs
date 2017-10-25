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
  it('should run all code correctly', async () => {
    expect(execWithEsm('cjs', '01-main-no-default.js')).to.equal(expectedOutput)
    expect(execWithEsm('esm', '01a-main-no-default.mjs')).to.include('require is not defined')
    expect(execWithEsm('esm', '01-main-no-default.mjs')).to.include(expectedOutput)
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
