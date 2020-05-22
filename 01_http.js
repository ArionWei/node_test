const http = require('http');

http.createServer((req, res) => {
  // 设置响应头， 状态码200，文件类型是html，字符集utf-8
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8'
  });

  // 返回响应数据
  res.end('<h1 style="text-align: center">hello node!</h1>');

}).listen(5000)