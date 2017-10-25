async function main() {
  const kettleModule = await import('./03-kettle')

  console.log(kettleModule.default) // short and stout (mjs)
}

main()
