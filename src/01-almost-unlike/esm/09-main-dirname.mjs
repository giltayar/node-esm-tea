import path from 'path'
import fs from 'fs'
import url from 'url'

const __dirname = path.dirname(new url.URL(import.meta.url).pathname)

console.log(fs.readFileSync(path.join(__dirname, '09-file.txt'), 'utf-8'))
