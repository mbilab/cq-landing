const server = require('http').createServer()
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const config = require('./config.json')
const Schema = mongoose.Schema

server.listen(8034)

const player = new Schema({
  id: String,
  name: String,
  account: String,
  password: Object,
  level: Number,
  exp: Number,
  title: Object,
  personal: String,
  character: Object,
  skillPoint: Object,
  buff: Object,
  time: Object,
  bonus: Object,
  ext: Object
})

const playerQuest = new Schema({
  pid: String,
  qid: String,
  completeTime: String,
  accepted: Number,
  alreadyRead: Number,
  memo: String
})

const playerSkill = new Schema({
  pid: String,
  sid: String,
  level: Number
})

const playerTitle = new Schema({
  pid: String
  tid: String
  completeTime: String
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
  const playerQuestModel = mongoose.model('player.quest', playerQuest)
  const playerSkillModel = mongoose.model('player.skill', playerSkill)
  const playerTitleModel = mongoose.model('player.title', playerTitle)
}


io.on('connection', function(socket) {

  socket.on('data', function(data) {
    console.log(data)
  })

})
