import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

import './style/css/reset.css';
import './style/root/root.css';


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>, 
  document.getElementById('root')
);

