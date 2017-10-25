module.exports = scalding => {
  return {
    handle: 'the handle',
    spout: 'the spout',
    tea: scalding ? 'scalding tea' : 'hot tea',
  }
}

module.exports.pot = 'the pot'
module.exports.potColor = 'black'
