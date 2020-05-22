// 通过 fs.stat 检查一个读取的是文件还是目录
const fs = require('fs');

fs.stat('../01_http.js', (err, stats) => {
  if (err) {
    console.log(err)
    return false
  } else {
    console.log(stats)

    console.log(`文件：${stats.isFile()}`);
    console.log(`目录：${stats.isDirectory()}`);

    return fa
  }
})