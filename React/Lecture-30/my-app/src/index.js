import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar';
import User from './User';

let user = [
  { name: 'John Doe', age: 30, email: 'john@example.com' },
  { name: 'Jane Doe', age: 28, email: 'jane@example.com' },
  { name: 'Alice Doe', age: 25, email: 'alice@example.com' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <User data={user} /> 
  </React.StrictMode>
);

