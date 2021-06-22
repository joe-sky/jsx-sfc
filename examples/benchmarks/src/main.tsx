import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppSfc from './AppSfc';

ReactDOM.render(
  <React.StrictMode>
    {Object.keys(Array.apply(null, { length: 5000 } as number[])).map(no => (
      <AppSfc key={no} no={no} />
    ))}
  </React.StrictMode>,
  document.getElementById('root')
);
