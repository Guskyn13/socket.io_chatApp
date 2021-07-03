const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
     cors:{
          origin: '*',
     }
})

const PORT = process.env.PORT || 4000

const router = require('./router')

io.on('connection', socket => {
     console.log('New connection')

     socket.on('message', payload => {
          io.emit('message', payload)
     })

     socket.on('disconnect', () => {
          console.log('User has left')
     })
})

app.use(router)

server.listen(PORT, () => {
     console.log(`Listening to port: ${PORT}`)
})
