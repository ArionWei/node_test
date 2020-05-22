// 通过 fs.mkdir 创建目录
const fs = require('fs');

fs.mkdir('page', err => {
  if (err) {
    console.log(err)
    return false
  } else {
    console.log('目录创建成功')
  }
})