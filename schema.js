const Schema = require('mongoose').Schema

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
  ext: Object,
})

const playerQuest = new Schema({
  pid: String,
  qid: String,
  completeTime: String,
  accepted: Number,
  alreadyRead: Number,
  memo: String,
})

const playerSkill = new Schema({
  pid: String,
  sid: String,
  level: Number,
})

const playerTitle = new Schema({
  pid: String,
  tid: String,
  completeTime: String,
})

module.exports = {
  player,
  playerQuest,
  playerSkill,
  playerTitle,
}
