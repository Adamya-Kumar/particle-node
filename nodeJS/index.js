const path = require('path')
const filepath = 'C:/Users/ASUS/Desktop/nodeJS/file/sample.txt'

// //dirname...
// console.log(path.dirname(filepath))
// console.log(__dirname)
// //basename...
// console.log(path.basename(filepath))
// console.log(__filename)
// //extension...
// console.log(path.extname(filepath))

// const sampleFile = 'sample.txt/text.js'
// console.log(path.join(path.dirname(filepath), sampleFile))

const fs = require('fs')
// console.log(fs)
// reading from file...
fs.readFile(filepath, (err, data) => {
  if (err) throw new Error('Error 1')
  console.log(data.toString())
})
