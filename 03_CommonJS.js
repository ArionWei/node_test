const http = require('http');
const tools1 = require('./03_tool-add');
// 如果 Node 在当前目录没找到 tool.js 文件，则会去 node_modules 里面去查找
const tools2 = require('03_tool-multiply');

/**
 * 通过 package.json 来引用文件
 * 1. 通过在 my-module 中 npm init --yes 来生成 package.json 文件
 * 2. package.json 文件中告诉了程序入口文件为 ："main": "tools.js",
 * 3. Node 通过 require 查找 my-module，发现它有个 package.json
 * 4. Node 执行 tools.js 文件
 */
const tools3 = require('my-module');

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