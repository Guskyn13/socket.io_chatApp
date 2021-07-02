const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
     console.log('connection successful')
     socket.on('message', payload => {
          console.log('Message received on server side: ', payload)
          io.emit('message', payload)
     })
})

server.listen(4000, () => {
     console.log('listening to port: 4000')
})
