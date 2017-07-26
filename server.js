const server = require('http').createServer()
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const config = require('./config.json')
const Schema = mongoose.Schema

const quest = new Schema({
  id: String,
  name: String,
  type: { type:String, default: 'main' },
  prerequisite: String,
  star: Number,
})
const hash = new Schema({
  courseName: String,
  id: String,
  password: String,
})

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
    if ( data.avatar == '' || data.courseName == '' || data.password == ''){
      socket.emit('message', '不可有欄位為空!!')
      return
    }
    for(let i=0; i < data.mission.length; i++){
      if( data.mission[i].Mission_name == '' || data.mission[i].Mission_content == ''){
        socket.emit('message', '不可有欄位為空!!')
        return
      }
    }
    let id = ""
    const possible = "abcdefghijklmnopqrstuvwxyz0123456789"

    for (let i = 0; i < 5; i++) {
    	id += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    const questModel = mongoose.model( id +'.quest', quest)
    for(let i=0; i < data.mission.length; i++){
      const row = {
        id: id + '-' + i,
        name: data.mission[i].Mission_name,
        prerequisite: data.mission[i].Mission_content,
        star: data.mission[i].Mission_rating,
      }
      new questModel(row).save()
    }

    const hashModel = mongoose.model('hash', hash)
    const cipher = {
      courseName: data.courseName,
      id: id,
      password: data.password,
    }
    new hashModel(cipher).save()
    socket.emit('message', '創建成功!!')
  })
})
