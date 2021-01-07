# JSX Separate Functional Components

<p>
  <!-- <a href="https://travis-ci.org/joe-sky/jsx-sfc"><img src="https://travis-ci.org/joe-sky/jsx-sfc.svg?branch=master" alt="Travis CI Status"></a>
  <a href="https://codecov.io/gh/joe-sky/jsx-sfc"><img src="https://codecov.io/gh/joe-sky/jsx-sfc/branch/master/graph/badge.svg" alt="Codecov"></a> -->
  <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a>
  <a href="https://www.npmjs.com/package/jsx-sfc"><img src="https://img.shields.io/npm/l/jsx-sfc.svg" alt="License"></a>
</p>

`jsx-sfc`(JSX Separate Functional Components) is a tiny library(about 1KB) for create React components with **separation of concerns** and **completely type safe**.

## Inspiration

This project was originally inspired by [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html). The point of Vue SFCs has been recognized by many people:

> Inside a component, it's template, logic and styles are inherently coupled, and collocating them actually makes the component more cohesive and maintainable.

However, this idea is very rare in the JSX(React) environment, only a few implementations from community:

- [one-loader](https://github.com/digitalie/one-loader)
- [react-sfc-swyx](https://github.com/react-sfc/react-sfc-swyx)

But the idea of this project is quite different from the above implementations.

todo: What features are needed to adapt to JSX environment

Although `jsx-sfc` is similar to Vue SFCs in the form of separation of concerns, but it was originally designed to adapt the JSX(TSX) environment!

So `jsx-sfc` has the following features:

- 🌟 No need single file, still functional components
- ✨ Clearly isolate **template**, **logic**, and **styles**
- 💫 Fully type inference by TypeScript design
- 🔥 Support all React hooks
- ⚡ Support React fast refresh
- 🔧 Support React eslint plugins
- 🚀 High performance and no side effects

## Features Introduction

### Basic Overview

[The live demo is here.]()

```tsx
import React, { useState, useEffect } from 'react';
import { css } from 'emotion';
import styled from '@emotion/styled';
import sfc from 'jsx-sfc';

const App = sfc({
  template: ({ data, style: { Wrap, hl } }) => (
    <Wrap>
      <i className={hl}>{data.user}</i>
    </Wrap>
  ),

  Component(props) {
    const [user, setUser] = useState(props.user);

    useEffect(() => {
      setUser('joe-sky');
    }, []);

    return { user };
  },

  style: () => ({
    Wrap: styled.section`
      color: #fff;
    `,
    hl: css`
      width: 50px;
    `
  })
});
```

### Strong Type template

### Optional CSS in JS styles

todo: styled-components, emotion, jss example

### More Cohesive components

todo: custom hooks, utils, gql example

### Why no side effects

todo: compiler, component members can be tested individually

## Packages

| Package                                                                                              | Badges                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/master/packages/jsx-sfc)                           | <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a> |
| [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/master/packages/babel-plugin-jsx-sfc) | <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/babel-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/babel-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                        |
| [vite-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/master/packages/vite-plugin-jsx-sfc)   | <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/vite-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/vite-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                            |

## Installation

## Usage

### sfc

### sfc with generics

### sfc.forwardRef

### Export component members

## Why designed like this

todo: ts limitation based

## Projects using jsx-sfc

todo: set some large code blocks

## Known Issues

todo: strictNullChecks

## Roadmap

## License

MIT
