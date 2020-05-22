const fs = require('fs');

const data = 'createWriteStream写入的数据！\n'
const writeStream = fs.createWriteStream('index.md')

writeStream.write(data, 'utf8')

writeStream.on('finish', () => {
  console.error('写入已完成');
});
writeStream.end('写入结尾\n');