// fs.readFile   fs.readdir
const fs = require('fs');

fs.readFile('文件.txt', (err, data) => {
  if (err) {
    console.log(err);
    return false
  } else {
    console.log('文件读取成功');
    console.log(data.toString());
  }
})

fs.readdir('../fs', (err, data) => {
  if (err) {
    console.log(err);
    return false
  } else {
    console.log('文件读取成功');
    console.log(data);
  }
})