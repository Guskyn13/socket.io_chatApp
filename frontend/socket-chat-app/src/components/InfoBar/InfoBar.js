import React from 'react'
import './InfoBar.css'

const InfoBar = ({ room }) => (
     <div className="infoBar">
          <div className="leftInnerContainer">
               <h3>{room}</h3>
               <div className="rightInnerContainer">
                    <a href="/">Exit Room</a>
               </div>
          </div>
     </div>
)

export default InfoBar