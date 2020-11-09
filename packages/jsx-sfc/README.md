# JSX Separate Functional Components

<p>
  <!-- <a href="https://travis-ci.org/joe-sky/jsx-sfc"><img src="https://travis-ci.org/joe-sky/jsx-sfc.svg?branch=master" alt="Travis CI Status"></a>
  <a href="https://codecov.io/gh/joe-sky/jsx-sfc"><img src="https://codecov.io/gh/joe-sky/jsx-sfc/branch/master/graph/badge.svg" alt="Codecov"></a> -->
  <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a>
  <a href="https://www.npmjs.com/package/jsx-sfc"><img src="https://img.shields.io/npm/l/jsx-sfc.svg" alt="License"></a>
</p>

`JSX-Separate-Functional-Components`(abbreviated as `jsx-sfc`) is a tiny library(about 800b) that create React components with **separation of concerns** and **completely type safe**.

## Basic Overview

```tsx
import React, { useState, useEffect } from 'react';
import { css } from 'emotion';
import styled from '@emotion/styled';
import sfc from 'jsx-sfc';

interface Props {
  user: string;
}

const App = sfc<Props>()({
  template(data, { styles: { Wrap, hl } }) {
    return (
      <Wrap>
        <i className={hl}>{data.user}</i>
      </Wrap>
    );
  },

  Component(props) {
    const [user, setUser] = useState(props.user);

    useEffect(() => {
      setUser('joe-sky');
    }, []);

    return props.template({ user });
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
