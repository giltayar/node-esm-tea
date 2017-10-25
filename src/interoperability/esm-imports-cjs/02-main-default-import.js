async function main() {
  const kettleModule = await import('./02-kettle')

  console.log(kettleModule.default) // short and stout (esm)
}

main()
