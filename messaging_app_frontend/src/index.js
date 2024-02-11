import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { ActionCableProvider } from 'react-actioncable-provider';

// ...


// Fetch the CSRF token
// const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

// Set the CSRF token as a default header for all axios requests
// axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActionCableProvider url={process.env.REACT_APP_API_WS_ROOT}>
    <App />
    </ActionCableProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
