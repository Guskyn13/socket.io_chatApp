import React from 'react'
import './Input.css'

const Input = ({ message, setMessage, sendMessage }) => (
     <form className="messageForm">
          <input 
               type="text" 
               className="formInput" 
               placeholder="Type message..." 
               value={message}
               onChange={({ target: { value } }) => setMessage(value)}
               onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
          />
          <button className="sendBtn" onClick={e => sendMessage(e)}>Send</button>
     </form>
)

export default Input