export default scalding => {
  return {
    handle: 'the handle',
    spout: 'the spout',
    tea: scalding ? 'scalding tea' : 'hot tea',
  }
}
