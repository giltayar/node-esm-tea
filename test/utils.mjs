'use strict'
import childProcess from 'child_process'
import path from 'path'

const {execFileSync} = childProcess

export function execWithEsm(...segments) {
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

export function execWithStdEsm(...segments) {
  try {
    return execFileSync('node', ['--require', '@std/esm', path.join('src', ...segments)], {
      stdio: 'pipe',
    })
      .toString()
      .trim()
      .split('\n')
  } catch (err) {
    return `error: ${err.message}`
  }
}
