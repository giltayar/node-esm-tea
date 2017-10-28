'use strict'
import mocha from 'mocha'
import chai from 'chai'
import {execWithStdEsm, execWithCjs} from './utils'

const {describe, it} = mocha
const {expect} = chai

describe('migration', function() {
  describe('dual mode simple module', () => {
    const expectedOutput = ['the handle', 'the spout', 'hot tea']

    it('use it as an esm module', async () => {
      expect(execWithStdEsm('03-migration', '01-main.mjs')).to.eql(expectedOutput)
    })

    it('use it as a cjs module', async () => {
      expect(execWithCjs('03-migration', '01-main.js')).to.eql(expectedOutput)
    })
  })
  describe('dual mode simple package', () => {
    const expectedOutput = ['the handle', 'the spout', 'hot tea']

    it('use it as an esm module', async () => {
      expect(execWithStdEsm('03-migration', '02-main.mjs')).to.eql(expectedOutput)
    })

    it('use it as a cjs module', async () => {
      expect(execWithCjs('03-migration', '02-main.js')).to.eql(expectedOutput)
    })
  })

  describe('dual mode package', () => {
    const expectedOutput = ['A KETTLE hot tea', 'BELATED HELLO!']

    it('use it as an esm module', async () => {
      expect(execWithStdEsm('03-migration', '03-main.mjs')).to.eql(expectedOutput)
    })

    it('use it as a cjs module', async () => {
      expect(execWithCjs('03-migration', '03-main.js')).to.eql(expectedOutput)
    })
  })
})
