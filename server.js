const server = require('http').createServer()
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const config = require('./config.json')

server.listen(8034)

const mongo = mongoose.connect('mongodb://' + config.user + ':' + config.password + '@merry.ee.ncku.edu.tw/CQ_cusitom',{useMongoClient: true,})

io.on('connection', function(socket) {

  socket.on('data', function(data) {
    console.log(data)
  })

})

