// 通过 fs.rmdir 删除目录
const fs = require('fs');

fs.rmdir('page', err => {
  if (err) {
    console.log(err)
    return false
  } else {
    console.log('目录删除成功')
  }
})