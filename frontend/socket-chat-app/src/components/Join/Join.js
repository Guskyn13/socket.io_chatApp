import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Join.css'

export default function Join() {
     const [ name, setName ] = useState('')
     const [ room, setRoom ] = useState('')

     return (
          <div className="joinOuterContainer">
               <div className="joinInnerContainer">
                    <h1 className="joinHeader">Join</h1>
                    <div className="input">
                         <input type="text" className="joinInput" placeholder="Username" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input">
                         <input type="text" className="joinInput" placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
                    </div>
                    <div className="submitBtnContainer">
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                         <button className="submitBtn" type="submit">Join Chat</button>
                    </Link>
                    </div>
               </div>
          </div>
     )
}
