const http = require('http');
const tools1 = require('./03_tool-add');
const tools2 = require('03_tool-multiply');
const tools3 = require('jsliang-module');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8'
  })
  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  console.log(tools1.add(1, 2, 3));
  console.log(tools2.multiply(1, 2, 3, 4));
  console.log(tools3.add(4, 5, 6));
  res.end()
}).listen(3000)