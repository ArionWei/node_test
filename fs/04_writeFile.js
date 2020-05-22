// 通过 fs.writeFile 来创建写入文件
const fs = require('fs');

fs.writeFile('文件.txt', 'hello nodejs', err => {
  if (err) {
    console.log(err)
    return false
  } else {
    console.log('文件创建成功')
  }
})