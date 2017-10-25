async function main() {
  const {kettle} = await import('./04-kettle')

  console.log(kettle) // short and stout (esm)
}

main()
