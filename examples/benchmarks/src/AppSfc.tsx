import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import sfc from 'jsx-sfc';

const App = sfc<{ no: string }>()({
  template: ({ data, props }) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React! {props.no}</p>
        <p>
          <button type="button" onClick={data.onClick}>
            count is: {data.count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  ),

  Component() {
    const [count, setCount] = useState(0);

    return {
      count,
      onClick() {
        setCount(count => count + 1);
      }
    };
  }
});

export default App;
