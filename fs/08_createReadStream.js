const fs = require('fs');

const stream = fs.createReadStream('index.md')

let readCount = 0
stream.on('data', chunk => {
  readCount++
  console.log(chunk.toString())
})

stream.on('end', () => {
  console.log(readCount)
  console.log('流读取结束')
})

stream.on('err', err => {
  console.log(err)
})