import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import queryString from 'query-string';

let socket;

export default function Chat({ location }) {
     const [name, setName] = useState('')
     const [room, setRoom] = useState('')
     const [message, setMessage] = useState([])
     const [messages, setMessages] = useState([])
     const endpoint = ('http://localhost:4000')

     useEffect(() => {
          const { name, room } = queryString.parse(location.search)

          socket = io(endpoint)

          setName(name)
          setRoom(room)

          socket.emit('message', { name, room }, () => {
                    
          })

          return () => {
               socket.emit('disconnect');
               socket.off();
          }
     }, [location.search])

     useEffect(() => {
          socket.on('message', (message) => {
               setMessages([...messages, message])
          })
     }, [messages])

     const sendMessage = (event) => {
          event.preventDefault()

          if (message) {
               socket.emit('sendMessage', message, () => setMessage(''))
          }
     }

     console.log(message, messages)

     return (
          <div>
              <div>
                   <input
                         value={message}
                         onChange={(event) => setMessage(event.target.value)}
                         onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
               </div>
          </div>
     )
}
