async function main() {
  const {default: kettle, tea} = await import('./10-kettle.mjs')

  console.log(kettle, tea)
}

main()
