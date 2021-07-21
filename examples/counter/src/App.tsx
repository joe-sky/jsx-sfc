import React, { useState } from 'react';
import logo from './logo.svg';
import sfc from 'jsx-sfc';
import { createUseStyles } from 'react-jss';

interface AppProps {
  title?: string;
}

const App = sfc<AppProps>()({
  Component: ({ title, styles: { useStyles } }) => {
    const [count, setCount] = useState(0);
    const classes = useStyles();

    return {
      title,
      count,
      setCount,
      classes,
      onClick: () => setCount(count => count + 1)
    };
  },

  static: {
    defaultProps: {
      title: 'Hello Vite + React!'
    }
  },

  render: ({ data }) => {
    const { classes } = data;

    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <p>{data.title}</p>
          <p>
            <button className={classes.AppButton} onClick={data.onClick}>
              count is: {data.count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a className={classes.AppLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
            {' | '}
            <a
              className={classes.AppLink}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer">
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    );
  },

  styles: () => {
    return {
      useStyles: createUseStyles({
        App: {
          textAlign: 'center'
        },
        AppLogo: {
          height: '40vmin',
          pointerEvents: 'none',
          animation: '$App-logo-spin infinite 20s linear'
        },
        '@keyframes App-logo-spin': {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        },
        AppHeader: {
          backgroundColor: '#282c34',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'calc(10px + 2vmin)',
          color: 'white'
        },
        AppLink: {
          color: '#61dafb'
        },
        AppButton: {
          fontSize: 'calc(10px + 2vmin)'
        }
      })
    };
  }
});

export default App;
