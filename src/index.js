import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';
import App from './App';

ReactDOM.render(
  <div className="text-center">
    <App />
  </div>,
  document.getElementById('root')
);
