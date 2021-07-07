import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import queryString from 'query-string';
import './Chat.css'

import UsersContainer from '../UsersContainer/UsersContainer'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'

let socket;

const Chat = ({ location }) => {
     const [ name, setName ] = useState('')
     const [ room, setRoom ] = useState('')
     const [ users, setUsers ] = useState('')
     const [ message, setMessage ] = useState([])
     const [ messages, setMessages ] = useState([])
     const endpoint = 'http://localhost:5000'

     useEffect(() => {
          const { name, room } = queryString.parse(location.search)

          socket = io(endpoint)

          setName(name)
          setRoom(room)

          socket.emit('join', { name, room }, (error) => {
               if (error) {
                    alert(error)
               }
          })

          // return () => {
          //      socket.emit('disconnect');
          //      socket.off();
          // }
     }, [endpoint, location.search])

     useEffect(() => {
          socket.on('message', (message) => {
               setMessages(messages => [ ...messages, message ])
          })

          socket.on('roomData', ({ users }) => {
               setUsers(users)
          })
     }, [])

     console.log(messages, message)

     const sendMessage = (e) => {
          e.preventDefault()

          if (message) {
               socket.emit('sendMessage', message, () => setMessage(''))
          }
     }

     return (
          <div className="chatOuterContainer">
               <div className="chatInnerContainer">
                   <InfoBar room={room} />
                    <Messages messages={messages} name={name} />
                   <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />                        
               </div>
               <UsersContainer users={users} />
          </div>
     )
}

export default Chat;