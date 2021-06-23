import React, { useState } from 'react';
import logo from './logo.svg';
import './TestCases.css';
import sfc from 'jsx-sfc';

function ReactFc({ no }: { no: number }) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React! {no}</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
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
  );
}

const JsxSfc = sfc<{ no: number }>()({
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

export default {
  ReactFc: { component: () => Array.from<number>({ length: 100 }).map(index => <ReactFc no={index} />), props: {} },
  JsxSfc: { component: () => Array.from<number>({ length: 100 }).map(index => <JsxSfc no={index} />), props: {} }
};
