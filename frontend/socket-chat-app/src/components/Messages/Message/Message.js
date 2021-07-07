import React from 'react';
import './Message.css';

const Message = ({ message: { text, user }, name }) => {
     let isSentByCurrentUser = false;

     const trimmedName = name.trim().toLowerCase();

     if (user === trimmedName) {
          isSentByCurrentUser = true;
     }

     return (
          isSentByCurrentUser
               ? (
                    <div className="messageContainer">
                         <p className="sentMessage pr10">{trimmedName}</p>
                         <div className="messageBox">
                              <p className="messageText">{text}</p>
                         </div>
                    </div>
               )
               : (
                    <div className="messageContainer justifyStart">
                         <div className="messageBox backgroundLight">
                              <p className="messageText darkText">{text}</p>
                         </div>
                         <p className="pl10">{user}</p>
                    </div>
               )
     );
}

export default Message;
