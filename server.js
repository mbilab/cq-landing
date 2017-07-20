const server = require('http').createServer()
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const config = require('./config.json')
const schema = require('./schema.js')

//const playerModel = mongoose.model('player', schema.player)
//const playerQuestModel = mongoose.model('player.quest', schema.playerQuest)
//const playerSkillModel = mongoose.model('player.skill', schema.playerSkill)
//const playerTitleModel = mongoose.model('player.title', schema.playerTitle)

server.listen(8034)

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
})

io.on('connection', function(socket) {
  socket.on('data', function(data) {
    let id = ""
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i = 0; i < 5; i++) {
    	id += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    socket.emit('id', id)
  })
})
