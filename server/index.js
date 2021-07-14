const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const socketio = require('socket.io')
const io = socketio(server)
const cors = require('cors')

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js')

const PORT = process.env.PORT || 5000

const router = require('./router')

// making a simple change

app.use(cors())
app.use(router)

io.on('connection', (socket) => {
     socket.on('join',  ({ name, room }, callback) => {
          const { error, user } = addUser({ id: socket.id, name, room})

          if (error) return callback(error)

          socket.join(user.room)

          socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`})
          socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined`})

          io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})

          callback()
     })

     socket.on('sendMessage', (message, callback) => {
          const user = getUser(socket.id)
          io.to(user.room).emit('message', { user: user.name, text: message})
          callback()
     })

     socket.on('disconnect', () => {
          const user = removeUser(socket.id)

          if (user) {
               io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left the room.`})
               io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})
          }
     })
})


server.listen(PORT, () => {
     console.log(`Listening to port: ${PORT}`)
})
