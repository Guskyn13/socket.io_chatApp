import React from 'react'
import './UsersContainer.css'

const UsersContainer = ({ users }) => (
     <div className="usersContainer">
          <div>
          <div className="usersOuterContainer">
               <h2>Chat App</h2>
               </div>
               {users
                    ? (
                         <div className="usersInnerContainer">
                              <h3>People currently chatting:</h3>
                              <div className="activeContainer">
                                   <h2>
                                        {users.map(({ name }) => (
                                             <div key={name} className="activeItem">
                                                  {name}
                                             </div>
                                        ))}
                                   </h2>
                              </div>
                         </div>
                    )
                    : null}
          </div>
     </div>
)

export default UsersContainer