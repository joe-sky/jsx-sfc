<h1 align="center">
  JSX Separate Function Components
  <div>
    <a href="https://travis-ci.com/joe-sky/jsx-sfc"><img src="https://travis-ci.com/joe-sky/jsx-sfc.svg?branch=main" alt="Travis CI Status"></a>
    <a href="https://codecov.io/gh/joe-sky/jsx-sfc"><img src="https://codecov.io/gh/joe-sky/jsx-sfc/branch/main/graph/badge.svg" alt="Codecov"></a>
    <!-- <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> -->
    <!-- <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> -->
    <!-- <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a> -->
    <a href="https://www.npmjs.com/package/jsx-sfc"><img src="https://img.shields.io/npm/l/jsx-sfc.svg" alt="License"></a>
  </div>
</h1>

<p align="center">
  <img alt="jsx-sfc demo" src="https://user-images.githubusercontent.com/12705724/126588176-3092a2f6-87fd-44e3-b97a-b1e43ee4716d.gif" width="500" />
</p>

| Package                                                                                            | Badges                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/jsx-sfc)                           | <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a>                                                                                                                                                                                                 |
| [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc) | <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/babel-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/babel-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                                                                                                                                                                                                                        |
| [vite-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/vite-plugin-jsx-sfc)   | <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/vite-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/vite-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                                                                                                                                                                                                                            |
| [jsx-sfc.macro](https://github.com/joe-sky/jsx-sfc/tree/main/packages/jsx-sfc.macro)               | <a href="https://www.npmjs.org/package/jsx-sfc.macro"><img src="https://img.shields.io/npm/v/jsx-sfc.macro.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc.macro"><img src="https://img.shields.io/npm/dm/jsx-sfc.macro.svg" alt="NPM Downloads"></a>                                                                                                                                                                                                                                                                                                                                    |
| [vscode-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/vscode-jsx-sfc)             | <a href="https://marketplace.visualstudio.com/items?itemName=joe-sky.vscode-jsx-sfc"><img src="https://vsmarketplacebadge.apphb.com/version/joe-sky.vscode-jsx-sfc.svg" /></a> <a href="https://marketplace.visualstudio.com/items?itemName=joe-sky.vscode-jsx-sfc"><img alt="VS Code Marketplace Downloads" src="https://img.shields.io/visual-studio-marketplace/d/joe-sky.vscode-jsx-sfc"></a> <a href="https://marketplace.visualstudio.com/items?itemName=joe-sky.vscode-jsx-sfc"><img alt="VS Code Marketplace Installs" src="https://img.shields.io/visual-studio-marketplace/i/joe-sky.vscode-jsx-sfc"></a> |

## Introduction

`jsx-sfc`(JSX Separate Function Components) is a [SFC](https://v3.vuejs.org/guide/single-file-component.html) like React function component API for managing CSS-in-JS and static members. It's written by TypeScript and has completely type safety, and based on compiler optimization, it's also easy to use🧙🏼‍♂️.

[Live Demo is here](https://codesandbox.io/s/jsx-sfc-demo-wwgd4) (**CSS in JS** use [twin.macro](https://github.com/ben-rogerson/twin.macro), can experience **Typings/Hot reloading/Dev tools** by Codesandbox).

## Features

- ✨ Clearly separate **JSX tags**, **logic**, **styles** and **any other members** within React function components
- 💫 **Completely type inference** design by TypeScript
- 🎉 Support all React hooks
- 🔥 Support [React Fast Refresh](https://github.com/facebook/react/tree/master/packages/react-refresh)
- 🔧 Support React Eslint plugins
- 🔨 Support React dev tools
- ⚡ Rendering performance is similar to regular function components, [there is a simple benchmark](https://github.com/joe-sky/jsx-sfc/tree/main/examples/benchmark)
- 🚀 Runtime code size less than 1KB and no dependencies
- 💻 Support **Split Editors** similar to [Volar](https://github.com/johnsoncodehk/volar) by [vscode-jsx-sfc](https://marketplace.visualstudio.com/items?itemName=joe-sky.vscode-jsx-sfc), here is a demo:

<p>
  <img alt="jsx-sfc demo" src="https://user-images.githubusercontent.com/12705724/126590775-1aa77a24-1cda-4ac6-a761-04d57b2ddb07.gif" width="800" />
</p>

## Table of Contents

- [Motivation](#motivation)
  - [Why](#why)
  - [A new function component API like SFC](#a-new-function-component-api-like-sfc)
  - [Split editors experience](#split-editors-experience)
- [API design details](#api-design-details)
  - [Adapting Eslint plugin](#adapting-eslint-plugin)
  - [Adapting hot reloading](#adapting-hot-reloading)
  - [Adapting React DevTools](#adapting-react-devtools)
  - [How about the performance](#how-about-the-performance)
    - [Benchmark](#benchmark)
  - [How about the testability](#how-about-the-testability)
  - [What is the compiled code](#what-is-the-compiled-code)
- [Examples](#examples)
  - [With Styled-Components](#with-styled-components)
  - [With Emotion](#with-emotion)
  - [With Jss](#with-jss)
  - [With Tailwind](#with-tailwind)
- [Installation](#installation)
  - [Using with Babel](#using-with-babel)
  - [Using with Vite](#using-with-vite)
  - [Using with CRA](#using-with-cra)
- [Usage](#usage)
  - [`sfc`](#sfc)
    - [With separate render function](#with-separate-render-function)
    - [With styles](#with-styles)
    - [Without render function](#without-render-function)
    - [With TS generics](#with-ts-generics)
  - [`sfc.forwardRef`](#sfcforwardRef)
  - [Props](#props)
  - [Static](#static)
  - [Export static members](#export-static-members)
  - [Export component data type](#export-component-data-type)
  - [Template tags](#template-tags)
- [API Design Principle](#api-design-principle)
- [Roadmap](#roadmap)

## Motivation

### Why

For example(with CSS-in-JS), when we write React components like this:

```tsx
const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

const Todo = ({ onClick, completed, text }) => (
  <TodoWrapper onClick={onClick}>
    {completed ? (
      <svg {...svgProps}>
        <polyline points="9 11 12 14 23 3"></polyline>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ) : (
      <svg {...svgProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      </svg>
    )}
    <span className="text">{text}</span>
  </TodoWrapper>
);

const TodoList = ({ todos, onTodoClick }) => (
  <TodoListWrapper>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </TodoListWrapper>
);

const TodoWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  border-bottom: 1px solid #eee;
  line-height: 24px;
  font-size: 110%;

  &:hover {
    background: #efefef;
  }
`;

const TodoListWrapper = styled.ul`
  margin: 20px 0;
  padding: 0;
`;
```

See above code, in addition to two React function components, there are also some global members. In fact, this is the regular way to write react components, and React does not have any limits on how to organize the code.

_However, when we first take over the components written by others, we often see that such code may not be able to distinguish the relationship between these global members and each React component at the first time, especially when there is more code_.

If we want to make their corresponding relationship clearer through refactoring, we may think of dividing them into multiple files, it's a great regular solution. But if each component code is not too much, we are often used to writing them in the a single file, which can save some time for file switching operation in the editor.

So in addition to separating files, we can try do this:

```tsx
const Todo = ({ onClick, completed, text }) => (
  <Todo.Wrapper>
    <svg {...Todo.svgProps}>
      <polyline points="9 11 12 14 23 3"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  </Todo.Wrapper>
);

Todo.svgProps = {
  ...
};

Todo.Wrapper = styled.li`
  ...
`;

const TodoList = ({ todos, onTodoClick }) => (
  <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
);

TodoList.Wrapper = styled.ul`
  ...
`;
```

In the above code, we set up the corresponding relationship between each global member and component in the way of `static member` convention, which at least describes the relationship from the code.

> What are static members of a function component? [You can refer to here.](https://stackoverflow.com/questions/57712682/react-functional-component-static-property)

This writing form is very simple, but it will report an error in TS, because `svgProps` and `Wrapper` properties don't exist in `Todo` component's type definition. Next, let's try `Object.assign`:

```tsx
const Todo = Object.assign(({ onClick, completed, text }) => (
  <Todo.Wrapper>
    <svg {...Todo.svgProps}>
      <polyline points="9 11 12 14 23 3"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  </Todo.Wrapper>
), {
  svgProps: {
    ...
  },
  Wrapper: styled.li`
    ...
  `
});
```

In this way, the type errors in TS are solved, it's really great. But if we pass in a generic to a component in this way, we will report a type error about `svgProps` and `Wrapper` don't exist:

```tsx
const Todo: React.FC<TodoProps> = Object.assign(...);
```

In short, each implementation seems to have its own advantages and disadvantages.

### A new function component API like SFC

In order to solve the above problems, I decided to design a new API, which can retain all the features and ecology adaptability of function components, and is more suitable for organizing complex code in a single file.

Before this project was created, I found [this interesting project](https://github.com/egoist/jue) by accident, it's component structure is similar to SFC([single-file-components](https://v3.vuejs.org/guide/single-file-component.html)). And then I found these interesting projects with similar ideas:

- [one-loader](https://github.com/digitalie/one-loader)
- [react-sfc-swyx](https://github.com/react-sfc/react-sfc-swyx)

The separation of SFC by code category inspired me to think of such a design:

_Bring the scattered global members to aggregate to the React component function in the form of static members by categories._

This API uses multiple function design, so named it: `Separate Function Components` (npm package named `jsx-sfc`, abbreviated as SFC also). And it's implementation makes full use of **TypeScript generic inference**, and support the use of all React existing tool chains(e.g. CSS-in-JS/Eslint/HMR). The structure is designed like this:

```tsx
import sfc from 'jsx-sfc';

const Todo = sfc({
  Component({ onClick, completed, text, styles: { Wrapper }, constant: { svgProps } }) {
    return (
      <Wrapper>
        <svg {...svgProps}>
          <polyline points="9 11 12 14 23 3"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      </Wrapper>
    );
  },

  static: () => {
    return {
      constant: {
        svgProps: {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round'
        }
      }
    };
  },

  styles: () => {
    return {
      Wrapper: styled.li`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px;
        border-bottom: 1px solid #eee;
        line-height: 24px;
        font-size: 110%;

        &:hover {
          background: #efefef;
        }
      `
    };
  }
});

const TodoList = sfc({
  Component({ todos, onTodoClick, styles: { Wrapper } }) {
    return (
      <Wrapper>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </Wrapper>
    );
  },

  styles: () => {
    return {
      Wrapper: styled.ul`
        margin: 20px 0;
        padding: 0;
      `
    };
  }
});
```

> [The TS type of the component returned by the sfc function is shown here.](#sfc)

See above code, the idea of this API is to organize code according to the category of members related to the components. It is mainly divided into `components`, `styles` and `other static members`. The `styles` are created in the form of function return values, so that some calculations can be processed in the function:

```tsx
{
  styles: () => {
    const WrapperBase = styled.div`
      background-color: #fff;
    `;

    return {
      Wrapper: styled(WrapperBase)`
        background-color: #fff;
      `
    };
  };
}
```

After the `styles` be created, you can use them in component functions like this:

```tsx
{
  Component({ styles: { Wrapper } }) {
    ...
  }
}
```

The `static` function is used in the same way as styles. You can return more layer objects by categories in static, as follows:

```tsx
{
  static: () => {
    return {
      constant: {
        foo: ...,
        bar: ...
      },

      utils: {
        func1: () => ...,
        func2: () => ...
      }
    };
  }
}
```

Then use them in the component functions:

```tsx
{
  Component({ constant: { foo, bar }, utils: { func1, func2 } }) {
    ...
  }
}
```

And each static member can be exported from the component:

```tsx
const {
  styles: { Wrapper },
  constant: { foo, bar },
  utils: { func1, func2 }
} = Todo;
const {
  styles: { Wrapper: ListWrapper }
} = TodoList;

// or
console.log(Todo.styles.Wrapper);
console.log(Todo.constant.foo);
console.log(Todo.utils.func1);
console.log(TodoList.styles.Wrapper);
```

> [For more specific design ideas, please see here.](#api-design-principle)

In addition, I also refer to the mental model of SFC, which can separate the `render` part of components(this is optional):

```tsx
import sfc from 'jsx-sfc';

const Test = sfc({
  Component(props) {
    const [user, setUser] = useState(props.user);

    useEffect(() => {
      setUser('joe-sky');
    }, []);

    return { user };
  },

  render: ({ data, styles: { Wrapper, hl } }) => (
    <Wrapper>
      <i className={hl}>{data.user}</i>
    </Wrapper>
  ),

  styles: () => ({
    Wrapper: styled.section`
      color: #fff;
    `,
    hl: css`
      width: 50px;
    `
  })
});
```

With this feature, we can only define hooks, events, etc. in the `Component function`, and let `render function` only focus on rendering JSX. And `render function` can also be exported for reuse like components, it's list of parameters is the return value of the `Component function`:

```tsx
const App = () => <Test.Render user="joe" />;
```

If you are also used to using Vue, you can replace `render` with `template` function and place it above `Component`. The effect is exactly the same:

```tsx
import sfc from 'jsx-sfc';

const Test = sfc({
  template: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <i>{data.user}</i>
    </Wrapper>
  ),

  Component(props) {
    const [user, setUser] = useState(props.user);
    return { user };
  },

  styles: () => ({
    Wrapper: styled.section`
      color: #fff;
    `
  })
});
```

On the whole, all global members are aggregated into related components, so at least it's easier to see the relationship between them when there are multiple components in a single file.

It's not just that, next let's look at another feature.

### Split editors experience

What is `Split Editors`? This is an interesting feature of a new vscode plugin for Vue called [Volar](https://github.com/johnsoncodehk/volar), you can [install Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) and experience it in Vue projects. Here is a Volar demo:

<p>
  <img alt="volar demo" src="https://user-images.githubusercontent.com/12705724/125753697-6957efee-61ef-4cd3-ab4c-803003a30256.gif" width="800" />
</p>

In the demo, click the "Split Editors" button in the upper right corner to generate 3 sub editors according to the `template`/`style`/`script` code in SFC, and then each editor folds the unrelated code.

At the beginning, I just found it interesting. But after thinking and experimenting, I found it useful:

_It not only enables us to focus more on developing a certain category of code in each component, and also makes it easy for us to scan and control the overall code of the component to deal with the relationship between different category codes._

So I made a vscode plugin with a similar idea: [vscode-jsx-sfc](https://marketplace.visualstudio.com/items?itemName=joe-sky.vscode-jsx-sfc). It needs to be used with `jsx-sfc`, here is the demo:

<p>
  <img alt="jsx-sfc demo" src="https://user-images.githubusercontent.com/12705724/126590775-1aa77a24-1cda-4ac6-a761-04d57b2ddb07.gif" width="800" />
</p>

See from the demo, after [install vscode-jsx-sfc](https://marketplace.visualstudio.com/items?itemName=joe-sky.vscode-jsx-sfc), click the "Split Editors" button in the upper right corner to automatically process all the components created by `sfc` in the current file:

- If you do not use render function, it will be split into 2 editors: `component and static`/`styles`. In the editor of each category, fold the code of other categories, and each editor will automatically position the cursor to the first line of the part;

- If you use the render function, it splits into 3 editors: `component and static`/`render`/`styles`;

- If there are multiple components created by `sfc` in a single file, the corresponding part of each component will be fold and the cursor will be positioned to the corresponding part of the first component;

- When there are syntax errors in the code, there will be fault tolerant processing. And when the code is saved, there will be a mechanism of refolding.

In this way, we can also use this interesting way when developing React components. Next let's look at some design details of this API.

## API design details

`jsx-sfc` is an API that must use compiler, this is the way after full consideration and practical experience.

### Adapting Eslint Plugin

If you configure the [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks), this API also can check where you can use hooks:

```tsx
import sfc from 'jsx-sfc';

const App = sfc({
  Component(props) {
    const [user, setUser] = useState(props.user);

    useEffect(
      () => console.log(user),
      // Eslint check warning, missing deps.
      []
    );

    useEffect(() => {
      setUser('joe-sky');
    }, []);

    return { user };
  },

  render: ({ data, styles: { Wrapper, hl } }) => {
    // Eslint check error, hooks can't appear inside the render function, .
    useEffect(() => ...);

    return (
      <Wrapper>
        <i className={hl}>{data.user}</i>
      </Wrapper>
    );
  }
});
```

In this API, the `render` function is only used for rendering JSX, and the `data logic part`(hooks) of the component should be written in the `Component` function, the `eslint-plugin-react-hooks` can effectively constrain this feature.

### Adapting Hot Reloading

This API can also support [React Fast Refresh](https://github.com/facebook/react/tree/master/packages/react-refresh). It has a compiler plugin: [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc), because it has to transform the runtime code into a format recognized by the [Babel plugin of React Fast Refresh](https://github.com/facebook/react/blob/master/packages/react-refresh/src/ReactFreshBabelPlugin.js).

### Adapting React DevTools

After compiling components written with `jsx-sfc`, you will see the same component tree and state structure as regular function components in `React DevTools`. So it can fully adapt to `React DevTools` without extra side effects(such as more component tree levels), [you can see the specific effect in this demo](https://codesandbox.io/s/jsx-sfc-demo-wwgd4).

### How about the performance

Another purpose of the compiler [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc) is performance optimization. This can make its performance similar to regular React components.

#### Benchmark

[Here is a simple benchmark compared with regular React function components](https://github.com/joe-sky/jsx-sfc/tree/main/examples/benchmark), you can run it and have a try.

### How about the testability

Because each static member can support exporting from a component, so it's testability is the same as the regular function component.

### What is the compiled code

[Code comparison before and after compiling can refer to here.](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc#how-it-works)

## Examples

Here are some examples of **using different CSS in JS Solutions**, which basically cover all the current usage of `jsx-sfc`:

### With Styled-Components

[Redux Todo List (styles use Styled-Components)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/redux-todos)

### With Emotion

[React-i18next Example (styles use Emotion)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/react-i18next)

### With Jss

[Simple Counter (styles use Jss)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/counter)

### With Tailwind

[TailwindCss Starter (styles use TailwindCss)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/tailwind-starter)

## Installation

### Using with Babel

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

- Configure Vite(v2.x):

```js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import jsxSfc from 'vite-plugin-jsx-sfc';

export default defineConfig({
  plugins: [jsxSfc(), reactRefresh()]
});
```

- Configure Vite(v1.x):

```js
// vite.config.js
import reactPlugin from 'vite-plugin-react';
import sfcPlugin from 'vite-plugin-jsx-sfc/legacy';

const config = {
  ...
  plugins: [sfcPlugin, reactPlugin]
}
```

### Using with CRA

Because _Creact-React-App_ doesn't support modifying Babel configuration directly, so you can use the `Babel Macro of jsx-sfc`:

```bash
npm install jsx-sfc.macro
```

When importing, just replace `jsx-sfc` by `jsx-sfc.macro`:

```tsx
import sfc from 'jsx-sfc.macro';
```

## Usage

### `sfc`

`sfc` used to create separate function components.

- Type definition of `sfc`

```ts
function sfc<Props, ComponentData, Styles, Static>(
  options: {
    Component: (props?: Props & Styles & Static & { props: Props }) => ComponentData;
    render?: (args: { data: ComponentData; props: Props; styles: Styles } & Static, ...templates: TemplateRender[]) => JSX.Element;
    styles?: Styles;
    static?: Static;
  }
): React.FC<Props> & { Render: (data?: ComponentData), Component: React.FC<Props> } & Styles & Static;
```

Only a symbolic type definition is put here for API documentation, there are many differences in the actual implementation. [Actual type definition is here.](https://github.com/joe-sky/jsx-sfc/blob/main/packages/jsx-sfc/src/defineComponent.ts)

#### With separate render function

```tsx
import React, { useState } from 'react';
import sfc from 'jsx-sfc';

const App = sfc({
  Component() {
    const [user, setUser] = useState('foo');
    return { user, onClick: () => setUser('bar') };
  },

  render: ({ data }) => (
    <div>
      <button onClick={data.onClick}>{data.user}</button>
    </div>
  )
});
```

- `Component function` is the actual React component function. It requires to return an object that pass to the `render function` for rendering;

- The data object in the first parameter of the `render function` is the return value of the `Component function`. And their types are consistent via dynamic inference.

> The type inferences are also type safe in TSX. For example, if you don't return an object from `Component function`, you will receive a type error.

If you have ever used Vue, you will be familiar with the habit of placing the template tag at the top of the component in SFC. `jsx-sfc` also provides a `template function`, which has the same function as `render function`:

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

You can put the `template function` at the top according to Vue's habit.

#### With styles

`jsx-sfc` allows you to choose a **CSS in JS Solution** to define the style of components, such as [styled-components](https://github.com/styled-components/styled-components), [Emotion](https://github.com/emotion-js/emotion). A styled-components example:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

const App = sfc({
  Component() {
    const [user, setUser] = useState('foo');
    return { user, onClick: () => setUser('bar') };
  },

  render: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

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
  Component() {
    const [user, setUser] = useState('foo');
    return { user, onClick: () => setUser('bar') };
  },

  render: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

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

#### Without render function

If you don't like to use the `separate render function` to write JSX tags, you still can also use the `Component function` directly to return the JSX tags:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

const App = sfc({
  Component({ styles: { Wrapper } }) {
    const [user, setUser] = useState('foo');

    return (
      <Wrapper>
        <button onClick={() => setUser('bar')}>{user}</button>
      </Wrapper>
    );
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

`jsx-sfc` uses `TS function overload feature` to ensure that it is still type safe without `render function`. If the `Component function` does not return JSX tags, the type error will occurs.

#### With TS generics

`jsx-sfc` can also pass generics:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

interface AppProps {
  userName: string;
}

// Notice: there's a pair of extra brackets after the generics!
const App = sfc<AppProps>()({
  Component(props) {
    const [user, setUser] = useState(props.userName);
    return { user, onClick: () => setUser('bar') };
  },

  render: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

  styles: {
    Wrapper: styled.div`
      background-color: #fff;
    `
  }
});
```

### `sfc.forwardRef`

`jsx-sfc` also support `forward ref components`:

```tsx
import React, { useState, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

interface AppProps {
  userName: string;
}

interface AppRef {
  getUserName: () => string;
}

// If you pass in TS generics, there's a pair of extra brackets after the generics; Otherwise, it's not necessary.
const App = sfc.forwardRef<AppRef, AppProps>()({
  Component(props, ref) {
    const [user, setUser] = useState(props.userName);

    useImperativeHandle(ref, () => ({
      getUserName: () => user
    }));

    return { user, onClick: () => setUser('bar') };
  },

  render: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

  styles: {
    Wrapper: styled.div`
      background-color: #fff;
    `
  }
});

function TestApp() {
  const appRef = useRef();

  return (
    <>
      <App ref={appRef} />
      <button onClick={() => console.log(appRef.current.getUserName())}>user name</button>
    </>
  );
}
```

### Props

#### Using Props in Component

The `props` is used in the same way as regular function components, but it just includes other static members such as `styles`:

```tsx
const App = sfc({
  Component({ prop1, prop2, styles: { Wrapper } }) {
    return (
      <Wrapper>
        {prop1}-{prop2}
      </Wrapper>
    );
  },

  styles: () => {
    return {
      Wrapper: styled.div`
        background-color: #fff;
      `
    };
  }
});
```

Usually we just use `props` as above. But if you need to merge `props` into JSX tags, you can use the `inner props` parameter:

```tsx
const App = sfc({
  Component({ props, styles: { Wrapper } }) {
    return <Wrapper {...props} />;
  },

  styles: () => {
    return {
      Wrapper: styled.div`
        background-color: #fff;
      `
    };
  }
});
```

✖️ Otherwise, if you write like the following, you may have a type error:

```tsx
const App = sfc({
  Component({ styles: { Wrapper }, ...props }) {
    return <Wrapper {...props} />;
  },

  styles: () => {
    return {
      Wrapper: styled.div`
        background-color: #fff;
      `
    };
  }
});
```

> You don't have to worry too much about performance. In the compiler parsing process, `styles` and `inner props` will be removed from `props` and handled separately.

#### Using Props in render

The `props` is also used in the `render function` like this:

```tsx
const App = sfc({
  Component(props) {
    const [user, setUser] = useState(props.name);
    return { user, onClick: () => setUser('bar') };
  },

  render: ({ props, data, styles: { Wrapper } }) => (
    <Wrapper>
      {props.name}
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

  styles: () => {
    return {
      Wrapper: styled.div`
        background-color: #fff;
      `
    };
  }
});
```

### Static

The `static` function is used to create static members of a component, then you can use these static members in the `Component` or `render` function:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

const App = sfc({
  Component({ constant: { foo } }) {
    const [user, setUser] = useState(foo);
    return { user, onClick: () => setUser('bar') };
  },

  render: ({ data, styles: { Wrapper }, utils: { trimWithPrefix } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{trimWithPrefix(data.user)}</button>
    </Wrapper>
  ),

  static: () => {
    return {
      constant: {
        foo: '  foo  '
      },

      utils: {
        trimWithPrefix(str: string) {
          return 'prefix_' + str.trim();
        }
      }
    };
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

- Also can pass in an object to `static`:

```tsx
const App = sfc({
  Component: ({ constant: { foo } }) => <>{foo}</>,

  static: {
    constant: {
      foo: 'foo'
    }
  }
});
```

- You can also use `static` to set the preset static members, such as `defaultProps`:

```tsx
const App = sfc({
  Component: ({ props }) => <>{props.foo}</>,

  static: {
    defaultProps: {
      foo: 'foo'
    }
  }
});
```

### Export static members

All members support exporting from `jsx-sfc` components:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

const App = sfc({
  Component() {
    const [user, setUser] = useState('foo');
    return { user, onClick: () => setUser('bar') };
  },

  render: ({ data, styles: { Wrapper }, utils: { trimWithPrefix } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{trimWithPrefix(data.user)}</button>
    </Wrapper>
  ),

  static: () => {
    return {
      utils: {
        trimWithPrefix(str: string) {
          return 'prefix_' + str.trim();
        }
      }
    };
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

function Test() {
  const [user, setUser] = useState('bar');

  return (
    <>
      <App.Render user={user} onClick={() => setUser('baz')} />
      <App.Component />
      <App.styles.Wrapper>{user}</App.styles.Wrapper>
      {App.utils.trimWithPrefix(user)}
    </>
  );
}
```

### Export component data type

Using `jsx-sfc` to define components, we can easily extract the TS type of internal state of a component, like this:

```tsx
import sfc, { ComponentDataType } from 'jsx-sfc';

const App = sfc({
  Component() {
    const [count, setCount] = useState({ value: 0 });
    return { count, setCount };
  },

  render: ({ data }) => (
    <>
      <i>{data.count}</i>
      <AddCount {...data} />
    </>
  )
});

// Get the return value type of the Component function
type AppDataType = ComponentDataType<typeof App>;

const AddCount: React.FC<AppDataType> = ({ count, setCount }) => (
  // Note that TS can easily infer the internal state type of the parent component in the child component, even very complex types.
  <button onClick={() => setCount({ value: count.value + 1 })}>Add count</button>
);
```

With this feature, we can directly pass the internal state type of the parent component to the child component, or reuse it in other forms. This is useful in some scenarios, such as above.

### Template tags

> This is an optional feature. We can use `Template tags` syntax to separate the code of JSX tags in render function.

In the `render function` of `jsx-sfc` components, you can use `Template tags` to define some reusable JSX logic:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc, { Template } from 'jsx-sfc';

const App = sfc({
  Component() {
    const [user, setUser] = useState('foo');
    return { user, onClick: () => setUser('bar') };
  },

  render: ({ data, styles: { Wrapper } }, btn, text: Template.Render<number>) => (
    <>
      <Template name={btn}>{() => <button onClick={data.onClick}>{data.user}</button>}</Template>

      <Template name={text}>{num => <i key={num}>{data.user}</i>}</Template>

      <Template>
        <Wrapper>
          {btn.render()}
          {[1, 2, 3].map(num => text.render(num))}
        </Wrapper>
      </Template>
    </>
  ),

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

1. All parameters starting from the second parameter of the `render function` are `Template tag renders`, and any number of them can be defined.

2. The `render function` needs to return a React.Fragment tag; The `Template tag` without name property is the entry function:

```tsx
{
  render: ({ data }, tmpl1, tmpl2) => (
    <>
      <Template name={tmpl1}>{() => <div>foo</div>}</Template>

      <Template name={tmpl2}>{() => <div>bar</div>}</Template>

      <Template>
        {() => (
          <section>
            {tmpl1.render()}
            {tmpl2.render()}
          </section>
        )}
      </Template>
    </>
  );
}
```

3. In TSX, we can define the parameter types of `Template tag render functions`, this can achieve type safe:

```tsx
{
  render: ({ data }, header: Template.Render<string, number>) => (
    <>
      <Template name={header}>
        {(title, count) => (
          <nav>
            {title} count: {count}
          </nav>
        )}
      </Template>

      <Template>
        {() => (
          <section>
            {header.render('posts', 100)}
            <div>body</div>
          </section>
        )}
      </Template>
    </>
  );
}
```

#### Categorize Template tags

You can use `createTemplate` to categorize the `Template tags`:

```tsx
import sfc, { createTemplate, TemplateRender } from 'jsx-sfc';

// Create the Template tag with "Region" and "Main" sub tags, and it supports type inference in TS.
const Template = createTemplate('Region', 'Main');

const App = sfc({
  Component(props) {
    return { test: props.test };
  },

  render: ({ data, styles: { Container } }, header: TemplateRender<string>, footer: TemplateRender<string>) => (
    <>
      <Template.Region name={header}>{content => <header>{content}</header>}</Template.Region>

      <Template.Region name={footer}>{content => <footer>{content}</footer>}</Template.Region>

      <Template.Main>
        {() => (
          <>
            {header.render(data.test)}
            {footer.render(data.test)}
          </>
        )}
      </Template.Main>
    </>
  )
});
```

#### `use-templates`

The `Template tags` feature has a independent implementation of hooks syntax, which supports React/Vue(v3). [Please see the documentation here.](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-templates)

## API Design Principle

Before I decided on `jsx-sfc v1.0 API`, I actually made a lot of different attempts. Here are some of my summaries:

### Can't use **this variable**

The `jsx-sfc` is a syntax extension for functional components, although it uses the syntax structure of `object method`, but it's only to better reflect the visual perception. Its features are exactly the same as functional components, so there is no `this variable`.

### Why pass in TS generics like this

I once thought about to put generics directly into `sfc function` like this:

```tsx
interface Props {
  title: string;
}

const App = sfc<Props>({
  Component: (props) => ...,
  render: ({ data, styles }) => ...,
  styles: ...
});
```

However, this doesn't work because the parameters of `render or Component function` contain dynamically inferred generics(e.g. `data` and `styles`). If they are defined in the same function together with `Props` generic, then you pass in `Props` generic manually, the type inference errors will appear.

This is limited to the fact that TS is not yet implemented **Partial Type Argument Inference**, you can refer to the following information for details: https://stackoverflow.com/questions/60377365/typescript-infer-type-of-generic-after-optional-first-generic. So I can only define `Props` generic in a separate function, and the API changes like this:

```tsx
interface Props {
  title: string;
}

const App = sfc<Props>()({ // There's a pair of extra brackets after the generics
  Component: (props) => ...,
  render: ({ data, styles }) => ...,
  styles: ...
});
```

### Why not use JSX tags as wrapper

If we use JSX Tags Wrapper like Vue SFC, we can get better visual isolation effect(such as [jue](https://github.com/egoist/jue)):

```tsx
const App = (
  <Component>
    <Template>{({ data, styles }) => ...}</Template>
    <Script>{props => ...}</Script>
    <Style>{...}</Style>
  </Component>
);
```

But unfortunately, the return value type of JSX tags can always be `JSX.Element`, only in this type can it be legally recognized as JSX tag by TS compiler. At this way, we will not be able to achieve type inference and type safe 😰.

### Why the component function be capitalized

We know that in the world of React, functions that start with capital letters are defined as components, and the React ecosystem tools(e.g. Eslint) will be the same standard. So the `jsx-sfc` also follows this standard, it can adapt to the existing ecosystem tools only in this way.

## Puzzle of Types

There are many strange TS types problems encountered in the development of `jsx-sfc`, some may be the current limitation of TS. Fortunately, these problems can be solved at present. [I recorded them in this issue.](https://github.com/joe-sky/jsx-sfc/issues/1)

> Some of the problems mentioned above should be the limitation of TS itself. You can also refer to the description of the [Vue v3 documentation in the TS adaptation section](https://v3.vuejs.org/guide/typescript-support.html).

## Roadmap

### Optimize compiled code

The compiled code of `jsx-sfc` has a few optimization space yet, which can continue to improve the runtime performance. I will gradually start to optimize it. [Here is an optimization idea to be implement in the future.](https://github.com/joe-sky/jsx-sfc/projects/1#card-64682275)

### About better syntax

If better syntax implementation details are found and if they're not compatible with v1.0 syntax, I will summarize them and arrange them to v2.0 implementation. This [new syntax](https://github.com/joe-sky/jsx-sfc/projects/1#card-64518964) may be added in the future, we can use TS function overload to implement it, so that the existing API of 1.x will not be break.

### vscode-jsx-sfc support regular syntax

I want to think about how to make `Split Editors` feature of `vscode-jsx-sfc` support regular React function components syntax.

## Change Logs

[Check here.](https://github.com/joe-sky/jsx-sfc/blob/main/CHANGELOG.md)

## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

MIT
