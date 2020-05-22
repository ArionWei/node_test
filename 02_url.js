const url = require('url');
const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    const result = url.parse(req.url, true)
    console.log(JSON.parse(JSON.stringify(result.query)))
    console.log(result.query.userName);
    console.log(result.query.userAge);
  }
  res.end()
}).listen(3000)