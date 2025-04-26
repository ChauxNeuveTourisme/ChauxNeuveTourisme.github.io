import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  // <-- CHANGE HERE
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>   {/* <-- AND HERE */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
