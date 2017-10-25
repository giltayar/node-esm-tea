async function main() {
  const {kettle} = await import('./03-kettle')

  console.log(kettle) // short and stout (esm)
}

main()
