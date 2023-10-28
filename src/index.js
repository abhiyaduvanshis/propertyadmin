import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';
import './index.css';
import { UserProvider } from './services/UserContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <Routers/>
    </UserProvider>
  </BrowserRouter>
);
reportWebVitals();
