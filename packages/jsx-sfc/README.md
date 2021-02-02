<h1 align="center">
  JSX Separate Function Components
  <div>
    <!-- <a href="https://travis-ci.org/joe-sky/jsx-sfc"><img src="https://travis-ci.org/joe-sky/jsx-sfc.svg?branch=master" alt="Travis   CI   Status"></a>
    <a href="https://codecov.io/gh/joe-sky/jsx-sfc"><img src="https://codecov.io/gh/joe-sky/jsx-sfc/branch/master/graph/badge.svg"     alt="Codecov"></a> -->
    <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> <a     href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> <a     href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat"     alt="Minzipped Size"></a>
    <a href="https://www.npmjs.com/package/jsx-sfc"><img src="https://img.shields.io/npm/l/jsx-sfc.svg" alt="License"></a>
  </div>
</h1>

<p align="center">
  <img alt="jsx-sfc demo" src="https://github.com/joe-sky/jsx-sfc/blob/main/public/images/sfc.gif?raw=true" width="500" />
</p>

`jsx-sfc`(JSX Separate Function Components) is a tiny tool(~1kb) for create React function components with **separation of concerns** and **completely type inference**. It can be seen as a JSX/TSX syntax or type tool, very simple to use🧙🏼‍♂️.

> The complete documentation will be completed soon.

## Demo

[Live demo is here.](https://codesandbox.io/s/jsx-sfc-demo-wwgd4)

## Features

- 🌟 Easy to write function components with **separation of concerns**
- ✨ Clearly isolate **template**, **logic**, **styles** and **any other concerns**
- 💫 **Completely type inference** design by TypeScript
- 🔥 Support all React hooks
- ⚡ Support React fast refresh
- 🔧 Support React eslint plugins
- 🚀 No dependencies and side effects

## Packages

| Package                                                                                              | Badges                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/master/packages/jsx-sfc)                           | <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a> |
| [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/master/packages/babel-plugin-jsx-sfc) | <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/babel-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/babel-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                        |
| [vite-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/master/packages/vite-plugin-jsx-sfc)   | <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/vite-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/vite-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                            |

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Packages](#packages)
- [Inspiration](#inspiration)
- [Installation](#installation)
  - [Using with Webpack](#using-with-webpack)
  - [Using with Vite](#using-with-vite)
- [Usage](#usage)
  - [`sfc`](#sfc)
  - [`sfc.forwardRef`](#sfc.forwardRef)
  - [Using with TypeScript](#using-with-typescript)
- [API design rules of jsx-sfc](#api-design-rules-of-jsx-sfc)
- [FAQ](#faq)
- [Roadmap](#roadmap)

## Inspiration

This project was originally inspired by [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html). The point of Vue SFCs has been recognized by many people:

> Inside a component, it's template, logic and styles are inherently coupled, and collocating them actually makes the component more cohesive and maintainable.

However, the separation of concerns idea is very rare in the JSX(React) environment, only a few implementations from community:

- [one-loader](https://github.com/digitalie/one-loader)
- [react-sfc-swyx](https://github.com/react-sfc/react-sfc-swyx)

But the idea of `jsx-sfc` is quite different from the above implementations. A simple demo, when we write a function component module like this:

```tsx
import React, { useState, useEffect } from 'react';
import { css } from 'emotion';
import styled from '@emotion/styled';

const App = props => {
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    setUser('joe-sky');
  }, []);

  return (
    <Wrap>
      <i
        className={css`
          width: 50px;
        `}>
        {user}
      </i>
    </Wrap>
  );
};

const Wrap = styled.section`
  color: #fff;
`;
```

Now, we can use `jsx-sfc` to rewrite it:

```tsx
import sfc from 'jsx-sfc';

const App = sfc({
  template: ({ data, styles: { Wrap, hl } }) => (
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

  styles: {
    Wrap: styled.section`
      color: #fff;
    `,
    hl: css`
      width: 50px;
    `
  }
});
```

<!-- See the demo, the main design ideas of `jsx-sfc`:

- Not single file, just separate functions.
- Extracting a separate template function.
- CSS in JS can be used in a separate style function.
- Extending any separate members(stores, graphqls, etc.).
- Exporting all separate members for reusing and testing.
- All of above support completely type inference. -->

<!-- tips: What features are needed to adapt to JSX environment -->

<!-- So `jsx-sfc` is similar to Vue SFCs in the form of separation of concerns, but it was originally designed to adapt the JSX(TSX) environment! -->

<!-- ## Benefit -->

<!-- tips: Use large code components examples, collapse code in md; like .vue, more cohesive components but can separate export members yet.; Compound components tree -->

## Installation

### Using with Webpack

You can use `jsx-sfc` with any bundle tools which can be use Babel(e.g. Webpack, Rollup):

```bash
npm install jsx-sfc babel-plugin-jsx-sfc
```

Configure Babel:

```js
// .babelrc
{
  ...
  plugins: ["jsx-sfc"]
}
```

### Using with Vite

Because Vite uses esbuild to transform JSX/TSX, so `jsx-sfc` provides a vite plugin:

```bash
npm install jsx-sfc vite-plugin-jsx-sfc
```

Configure Vite(v1.x):

```js
// vite.config.js
import reactPlugin from 'vite-plugin-react';
import sfcPlugin from 'vite-plugin-jsx-sfc';

const config = {
  ...
  plugins: [sfcPlugin, reactPlugin]
}
```

## Usage

### `sfc`

`sfc` used to create separate function components.

- Type definition of `sfc`

```ts
function sfc<TemplateData, Styles, EX>(
  options: {
    template?: (args: { data: TemplateData; styles: Styles } & EX) => JSX.Element;
    Component: (props?: SFCProps) => TemplateData;
    styles?: Styles;
  },
  extensions?: EX
): React.FC;
```

> Only a rough type definition is put here for API documentation. [Actual type definition is here.](https://github.com/joe-sky/jsx-sfc/blob/main/packages/jsx-sfc/src/defineComponent.ts#L15)

#### Basic: Isolate template function:

```tsx
import React, { useState } from 'react';
import sfc from 'jsx-sfc';

const App = sfc({
  template: ({ data }) => (
    <div>
      <button onClick={data.onClick}>{data.user}</button>
    </div>
  ),

  Component() {
    const [user, setUser] = useState('foo');
    return { user, onClick: () => setUser('bar') };
  }
});
```

- `Component function` is the actual React component function. It requires to return an object that pass to the `template function` for rendering;

- The data object in the first parameter of the `template function` is the return value of the `Component function`. And their types are consistent via dynamic inference.

> The type inferences are also type safe in TSX. For example, if you don't return an object from `Component function`, you will receive a type error.

#### With styles

`jsx-sfc` allows you to choose a CSS in JS framework to define the style of components, such as [styled-components](https://github.com/styled-components/styled-components), [Emotion](https://github.com/emotion-js/emotion). A styled-components example:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

const App = sfc({
  template: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

  Component() {
    const [user, setUser] = useState('foo');
    return { user, onClick: () => setUser('bar') };
  },

  styles: {
    Wrapper: styled.div`
      background-color: #fff;
    `
  }
});
```

- Define styles in a function:

If you need to extend components when using styled-components, you can also define styles as a function:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

const App = sfc({
  template: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

  Component() {
    const [user, setUser] = useState('foo');
    return { user, onClick: () => setUser('bar') };
  },

  styles: () => {
    const WrapperBase = styled.div`
      background-color: #fff;
    `;

    return {
      Wrapper: styled(WrapperBase)`
        background-color: #fff;
      `
    };
  }
});
```

#### With generics

`jsx-sfc` components can also pass generics:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

interface Props {
  userName: string;
}

// Notice: there's a pair of extra brackets after the generics!
const App = sfc<Props>()({
  template: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

  Component(props) {
    const [user, setUser] = useState(props.userName);
    return { user, onClick: () => setUser('bar') };
  },

  styles: {
    Wrapper: styled.div`
      background-color: #fff;
    `
  }
});
```

### `sfc.forwardRef`

### Export members

<!-- ### Using with TypeScript -->

<!-- todo: difference in strict mode -->

## API design rules of jsx-sfc

<!-- todo: ts limitation based -->

## FAQ

<!-- todo: { data: { xxx } } -->

<!-- todo: defferent from class component -->

## Roadmap

## Who is using jsx-sfc

<!-- todo: set some large code blocks -->

## License

MIT

<!-- ## Introduction of separate members

### Strong Type template

### Optional CSS in JS styles

todo: styled-components, emotion, jss example

### More Cohesive components

todo: custom hooks, utils, gql example

### Why no side effects

todo: compiler, component members can be tested individually -->
