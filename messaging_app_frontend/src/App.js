// src/App.js
import React from 'react';
import './App.css';
import CustomerMessageForm from './components/CustomerMessageForm';
import AgentMessageList from './components/AgentMessageList';

function App() {
  return (
    <div className="App">
      <h1>Messaging App</h1>
      <CustomerMessageForm />
      <AgentMessageList />
    </div>
  );
}

export default App;

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
