const fs = require('fs');

fs.rename('文件.txt', 'index.md', err => {
  if (err) {
    console.log(err)
    return false
  } else {
    console.log('修改文件名成功')
  }
})