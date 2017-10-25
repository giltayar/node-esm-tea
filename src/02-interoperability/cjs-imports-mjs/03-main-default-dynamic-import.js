async function main() {
  const {default: kettle} = await import('./03-kettle')

  console.log(kettle) // short and stout (mjs)
}

main()
