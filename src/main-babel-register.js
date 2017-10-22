'use strict'
import teapot, {handle, spout, tea} from './kettle'
import tea2 from './kettle2'
import _, {toUpper} from 'lodash'

console.log(teapot, tea, handle, spout)
console.log(tea2)
console.log(toUpper('hello, world'))
console.log(_.toUpper('hello, world'))

async function main() {
  const _ = await import('lodash')
  // console.log(_.default.toUpper('dynamic import!'))
  console.log(_.toUpper('dynamic import!'))
}

main()

