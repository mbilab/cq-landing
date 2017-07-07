const server = require('http').createServer()
const io = require('socket.io')(server)

server.listen(8034)

io.on('connection', function(socket) {

  socket.on('data', function(data) {
    console.log(data)
  })

})
