import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// The root scripting to load the App into index.html

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

