// src/App.js
import React, { useState } from 'react';
import './App.css';
import CustomerMessageForm from './components/CustomerMessageForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgentMessageList from './components/AgentMessageList';
import CustomerForm from './components/CustomerForm';
import AgentResponseForm from './components/AgentResponseForm';

function App() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <Router>
      <div className="App">
        <h1>Messaging App</h1>
        <Routes>
          <Route path="/" element={<CustomerForm />} />
          <Route path="/agent" element={
            selectedMessage ? (
              <AgentResponseForm message_id={selectedMessage.id} agent_id={1} />
            ) : (
              <AgentMessageList setSelectedMessage={setSelectedMessage} />
            )
          } />
        </Routes>
      </div>
    </Router>
  );
}


export default App;

// // src/App.js
// import React from 'react';
// import './App.css';
// import CustomerMessageForm from './components/CustomerMessageForm';
// import AgentMessageList from './components/AgentMessageList';
// import CustomerForm from './components/CustomerForm';

// function App() {
//   return (
//     <div className="App">
//       <h1>Messaging App</h1>
//       <CustomerForm />
//       {/* <CustomerMessageForm /> */}
//       <AgentMessageList />
      
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
