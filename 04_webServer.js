const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  let pathName = req.url

  // console.log(pathName)
  let extName = path.extname(pathName);
  console.log(extName)

  if (pathName === '/') {
    pathName = 'index.html'
  }

  if (pathName !== '/favicon.ico') {
    fs.readFile('./webserver/' + pathName, (err, data) => {
      // 文件未找到
      if (err) {
        pathName = '404.html'
        // 去找404页面
        fs.readFile('./webserver/' + pathName, (notFoundErr, notFoundData) => {
          if (notFoundErr) {
            console.log(notFoundErr)
          } else {
            res.writeHead(200, {
              'Content-Type': 'text/html;charset=UTF-8'
            })
            res.end(notFoundData)
          }
        })
      } else {
        const extdata = fs.readFileSync('./ext.json')
        const exts = JSON.parse(extdata.toString())
        // const ext = getExt(extName)
        res.writeHead(200, {
          'Content-Type': exts[extName] + ';charset=UTF-8'
        })
        res.end(data)
      }
    })
  }
}).listen(9527)

// 获取后缀名
getExt = (extName) => {
  switch (extName) {
    case '.html': return 'text/html';
    case '.css': return 'text/css';
    case '.js': return 'text/js';
    default: return 'text/html';
  }
}