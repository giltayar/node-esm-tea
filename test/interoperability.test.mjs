'use strict'
import mocha from 'mocha'
import chai from 'chai'
import {execWithEsm, execWithStdEsm} from './utils'

const {describe, it} = mocha
const {expect} = chai

describe('interoperability between cjs and esm', function() {
  describe('esm imports cjs', () => {
    const expectedOutput = ['short and stout (cjs)']

    it('default using import', async () => {
      expect(execWithEsm('interoperability', 'esm-imports-cjs', '01-main-default.mjs')).to.eql(
        expectedOutput,
      )
    })

    it('default using dynamic import', async () => {
      expect(
        execWithEsm('interoperability', 'esm-imports-cjs', '02-main-named-import.mjs'),
      ).to.include('error:')
    })

    it('named using dynamic import', async () => {
      expect(
        execWithEsm('interoperability', 'esm-imports-cjs', '03-main-named-as-default.mjs'),
      ).to.eql(expectedOutput)
    })
  })
  describe('cjs imports esm', () => {
    const expectedOutput = ['short and stout (esm)']

    it('default using require', async () => {
      expect(
        execWithEsm('interoperability', 'cjs-imports-esm', '01-main-default-require.js'),
      ).to.include('error:')
    })

    it('default using import', async () => {
      expect(
        execWithEsm('interoperability', 'cjs-imports-esm', '01-main-default-import.js'),
      ).to.include('error:')
    })

    it('default using dynamic import (native esm)', async () => {
      expect(
        execWithEsm('interoperability', 'cjs-imports-esm', '03-main-default-dynamic-import.js'),
      ).to.include('error:')
    })

    it('default using dynamic import (@std/esm)', async () => {
      expect(
        execWithStdEsm('interoperability', 'cjs-imports-esm', '03-main-default-dynamic-import.js'),
      ).to.eql(expectedOutput)
    })

    it('named using dynamic import', async () => {
      expect(
        execWithStdEsm('interoperability', 'cjs-imports-esm', '04-main-named-dynamic-import.js'),
      ).to.eql(expectedOutput)
    })
  })
})
