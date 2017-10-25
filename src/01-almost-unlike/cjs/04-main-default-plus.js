'use strict'
const kettleMaker = require('./04-kettle')
const {pot, potColor} = kettleMaker

const kettle = kettleMaker(false)

console.log(kettle.handle) // the handle
console.log(kettle.spout) // the spout
console.log(kettle.tea) // hot tea
console.log(pot, 'is', potColor) // the pot is black
