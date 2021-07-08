import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import UserProvider from './Context/UserProvider.js'
import App from './App';

ReactDOM.render(
  <BrowserRouter>
      <UserProvider>
    <App />
      </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
