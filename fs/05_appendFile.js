// fs.appendFile异步地追加数据到文件，如果文件尚不存在则创建文件。
const fs = require('fs');

fs.appendFile('文件.txt', '----fs.appendFile异步地追加数据到文件，如果文件尚不存在则创建文件', err => {
  if (err) {
    console.log(err)
    return false
  } else {
    console.log('文件内容追加成功')
  }
})