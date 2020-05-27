const fs = require('fs');

const events = require('events');

const EventEmitter = new events()

getExt = (callback) => {
  fs.readFile('./ext.json', (err, data) => {
    if (!err) {
      EventEmitter.emit('ext', 'hello world')
      callback(data)
    }
  })
}

getExt((data) => {
  // console.log(data.toString())
})

EventEmitter.on('ext', (ext) => {
  console.log(ext)
})