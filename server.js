const server = require('http').createServer()
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const config = require('./config.json')
const Schema = mongoose.Schema

server.listen(8034)

const player = new Schema({
  username: String,
  level: Number
})

mongoose.connect(
  'mongodb://' + config.user + ':' + config.password + '@' + config.host + '/' + config.database,
  { useMongoClient: true }
)
const db = mongoose.connection

db.on('error', function(err) {
  console.log(err)
})

db.on('open', function() {
  console.log('db open')
  const playerModel = mongoose.model('player', player)

  new playerModel({username: 'aaa', level: 10}).save()
})

io.on('connection', function(socket) {

  socket.on('data', function(data) {
    console.log(data)
  })

})
