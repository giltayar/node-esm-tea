'use strict'
const {handle, spout, tea, heatUp} = require('./02-kettle')

console.log(handle) // the handle
console.log(spout) // the spout
heatUp()
console.log(tea) // hot tea (!)
