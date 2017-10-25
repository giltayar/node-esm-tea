const path = require('path')
const fs = require('fs')

console.log(fs.readFileSync(path.join(__dirname, '09-file.txt'), 'utf-8'))
