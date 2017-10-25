'use strict'
import teapot, {handle, spout, tea} from './kettle'
import tea2 from './kettle2'
import tea3 from './kettle3'
import _ from 'lodash'

console.log(teapot, tea, handle, spout)
console.log('tea2', tea2)
console.log('tea3', tea3)
console.log(_.toUpper('hello, world'))

async function main() {
  console.log('!!!')
  // const _ = await import('lodash')
  // console.log(_.default.toUpper('dynamic import!'))
}

main()
