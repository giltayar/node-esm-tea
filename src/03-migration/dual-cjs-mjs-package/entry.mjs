import {toUpper} from './folder/utils'

export default toUpper('a kettle')

export const spout = 'the spout'
export const handle = 'the handle'
export const tea = 'hot tea'

import('./folder/utils').then(({toUpper}) => console.log(toUpper('belated hello!')))
