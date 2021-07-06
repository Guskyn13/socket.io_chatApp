import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

// const userName = 'User ' + parseInt(Math.random() * 10)

// function App() {
//      const [message, setMessage] = useState('')
//      const [ chat, setChat] = useState([])

//      useEffect(() => {
//           socket.on('message', payload => {
//                setChat([...chat, payload])
//           })
//      })

//      const sendMessage = (e) => {
//           e.preventDefault();
//           
//           setMessage('')
//      }

//      return (
//           <div className="App">
//                <h1>Socket Chat App</h1>
//                <form onSubmit={sendMessage}>
//                     <input
//                          type="text"
//                          name="message"
//                          placeholder="Type message"
//                          value={message}
//                          onChange={(e) => { setMessage(e.target.value) }}>
//                     </input>
//                     <button type="submit">Send</button>
//                </form>
//                {chat.map((payload, index) => {
//                     return (
//                          <h3 key={index} >{payload.userName}: <span>{payload.message}</span></h3>
//                     )
//                })}
//           </div>
//      );
// }

const App = () => {
     return(
     <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" exact component={Chat} />
     </Router>
     )
}

export default App;
