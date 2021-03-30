<h1 align="center">
  JSX Separate Function Components
  <div>
    <a href="https://travis-ci.org/joe-sky/jsx-sfc"><img src="https://travis-ci.org/joe-sky/jsx-sfc.svg?branch=main" alt="Travis CI Status"></a>
    <a href="https://codecov.io/gh/joe-sky/jsx-sfc"><img src="https://codecov.io/gh/joe-sky/jsx-sfc/branch/main/graph/badge.svg" alt="Codecov"></a>
    <!-- <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> -->
    <!-- <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> -->
    <!-- <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a> -->
    <a href="https://www.npmjs.com/package/jsx-sfc"><img src="https://img.shields.io/npm/l/jsx-sfc.svg" alt="License"></a>
  </div>
</h1>

<p align="center">
  <img alt="jsx-sfc demo" src="https://github.com/joe-sky/jsx-sfc/blob/main/public/images/sfc.gif?raw=true" width="500" />
</p>

| Package                                                                                            | Badges                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/jsx-sfc)                           | <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a> |
| [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc) | <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/babel-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/babel-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                        |
| [vite-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/vite-plugin-jsx-sfc)   | <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/vite-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/vite-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                            |

## Introduction

`jsx-sfc`(JSX Separate Function Components) is a tiny tool(~1kb) for create React function components with **separation of concerns** and **completely type inference**. It can be seen as a JSX/TSX syntax or type tool, very simple to use🧙🏼‍♂️.

<!-- > Currently version is v1.0.0-alpha.x, the v1 version and full documentation will be completed soon. -->

[Live Demo is here.](https://codesandbox.io/s/jsx-sfc-demo-wwgd4)

## Features

- 🌟 Easy way to define function components with **separation of concerns**
- ✨ Clearly isolate **template**, **logic**, **styles** and **any other concerns**
- 💫 **Completely type inference** design by TypeScript
- 🎉 Support all React hooks
- 🔥 Support React Fast Refresh
- 🔧 Support React eslint plugins
- ⚡ Performance equivalent to original function components
- 🚀 No any dependencies

## Table of Contents

- [Inspiration & Motivation](#inspiration--motivation)
  - [Adapt Eslint Plugin](#adapt-eslint-plugin)
  - [Adapt Hot Reloading](#adapt-hot-reloading)
  - [Performance](#performance)
- [Quick Start](#quick-start)
  - [Installation with Webpack](#installation-with-webpack)
  - [Installation with Vite](#installation-with-vite)
- [Examples](#examples)
- [Usage](#usage)
  - [`sfc`](#sfc)
  - [`sfc.forwardRef`](#sfc.forwardRef)
  - [Sub Templates](#sub-templates)
  - [Extensions](#extensions)
  - [Export Members](#export-members)
- [Benefits](#benefits)
- [API Design Principle](#api-design-principle)
- [Roadmap](#roadmap)
- [Who is using](#who-is-using)

## Inspiration & Motivation

This project was originally inspired by [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html). The point of Vue SFCs has been recognized by many people:

> Inside a component, it's template, logic and styles are inherently coupled, and collocating them actually makes the component more cohesive and maintainable.

However, the **separation of concerns** idea is very rare in the JSX(React) environment, only a few implementations from community:

- [one-loader](https://github.com/digitalie/one-loader)
- [react-sfc-swyx](https://github.com/react-sfc/react-sfc-swyx)

Overall, the above two solutions are to create a new file type for React to implement the idea similar to Vue SFCs. But the idea of this project is quite different from the above implementations:

_Considering that the original design principle of JSX is a syntax extension of the existing JavaScript, so I want to create a new SFC solution that is more accord with the existing JSX(React) development habits._

### Extending Function Component Syntax

Since the birth of react hooks, function component has been the main way to write React components. My main idea is to create an as simple as possible extension syntax for the existing function components that conforms to the idea of **separation of concerns**, and without creating any new tool chains(e.g. IDE syntax highlight plugin).

So it named: `Separate Function Components`(package named `jsx-sfc`), abbreviated as SFC also ✌️. It's implementation makes full use of **TypeScript generic inference**, and support the use of all React existing tool chains(e.g. CSS-in-JS/Eslint/HMR).

> Why not named react-sfc? In fact, the npm package name of react-sfc has been occupied([react-sfc-swyx](https://github.com/react-sfc/react-sfc-swyx))😅.

A simple demo, when we write a function component module like this:

```tsx
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const App = props => {
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    setUser('joe-sky');
  }, []);

  return (
    <Wrapper>
      <i
        className={css`
          width: 50px;
        `}>
        {user}
      </i>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: #fff;
`;
```

Now, we can use `jsx-sfc` to rewrite it with **separation of concerns**, and TypeScript will inferred all types correctly:

```tsx
import sfc from 'jsx-sfc';

const App = sfc({
  template: ({ data, styles: { Wrapper, hl } }) => (
    <Wrapper>
      <i className={hl}>{data.user}</i>
    </Wrapper>
  ),

  Component(props) {
    const [user, setUser] = useState(props.user);

    useEffect(() => {
      setUser('joe-sky');
    }, []);

    return { user };
  },

  styles: {
    Wrapper: styled.section`
      color: #fff;
    `,
    hl: css`
      width: 50px;
    `
  }
});
```

Such this component structure at first glance, we can immediately distinguish the responsibilities of each part of the code~

### Adapt Eslint Plugin

And if you configure the `eslint-plugin-react-hooks`, it also can check where you can use hooks:

```tsx
import sfc from 'jsx-sfc';

const App = sfc({
  template: ({ data, styles: { Wrapper, hl } }) => {
    // Eslint check error, hooks can't appear inside the template function.
    useEffect(() => ...);

    return (
      <Wrapper>
        <i className={hl}>{data.user}</i>
      </Wrapper>
    );
  },

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
  }

  ...
});
```

### Adapt Hot Reloading

Finally, `jsx-sfc` can also support `React Fast Refresh` perfectly. Because it has a `babel-plugin-jsx-sfc` to transform the runtime code into a format recognized by the `Babel plugin of React Fast Refresh` 😉.

<!-- See the demo, the main design ideas of `jsx-sfc`:

- Not single file, just separate functions.
- Extracting a separate template function.
- CSS in JS can be used in a separate style function.
- Extending any separate members(stores, graphqls, etc.).
- Exporting all separate members for reusing and testing.
- All of above support completely type inference. -->

<!-- tips: What features are needed to adapt to JSX environment -->

<!-- So `jsx-sfc` is similar to Vue SFCs in the form of separation of concerns, but it was originally designed to adapt the JSX(TSX) environment! -->

### About Performance

`jsx-sfc` is a tool that supports compiler optimization, so it's performance is almost the same as that of normal React function components ⚡️.

## Quick Start

### Installation with Webpack

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

### Installation with Vite

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

## Examples

- [Redux Todo List (styles use Styled-Components)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/redux-todos)
- [React-i18next Example (styles use Emotion)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/react-i18next)
- [Simple Counter (styles use Jss)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/counter)
- [TailwindCss Starter (styles use TailwindCss)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/tailwind-starter)

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

const App = sfc.forwardRef<AppRef, AppProps>()({
  template: ({ data, styles: { Wrapper } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

  Component(props, ref) {
    const [user, setUser] = useState(props.userName);

    useImperativeHandle(ref, () => ({
      getUserName: () => user
    }));

    return { user, onClick: () => setUser('bar') };
  },

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

### Sub Templates

In the template function of `jsx-sfc` components, we can also create reusable sub template functions:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc, { Template } from 'jsx-sfc';

const App = sfc({
  template: ({ data, styles: { Wrapper } }, btn, text: Template.Func<number>) => (
    <>
      <Template name={btn}>{() => <button onClick={data.onClick}>{data.user}</button>}</Template>

      <Template name={text}>{num => <i key={num}>{data.user}</i>}</Template>

      <Template>
        <Wrapper>
          {btn.template()}
          {[1, 2, 3].map(num => text.template(num))}
        </Wrapper>
      </Template>
    </>
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

### Extensions

Except template and styles, other extensions for `jsx-sfc` components are also supported:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

const App = sfc({
  template: ({ data, styles: { Wrapper }, utils: { trimWithPrefix } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{trimWithPrefix(data.user)}</button>
    </Wrapper>
  ),

  Component() {
    const [user, setUser] = useState('  foo  ');
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
  },
  // Notice: you need to pass in the second parameter.
  {
    utils: {
      trimWithPrefix(str: string) {
        return ('prefix_' + str.trim());
      }
    }
  }
});
```

### Export Members

All members support exporting from `jsx-sfc` components(except `Component`):

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

console.log(App.template);
console.log(App.styles);
```

<!-- ### Using with TypeScript -->

<!-- todo: difference in strict mode -->

## Benefits

<!-- tips: Use large code components examples, collapse code in md; like .vue, more cohesive components but can separate export members yet.; Compound components tree -->

Compared with the original React function components, `jsx-sfc` has these benefits:

### Clearer visual isolation

<details>
<summary>
For example: Components with complex logic (Click to expand)
</summary>

```tsx
const QueryForm: React.FC = () => {
  const store = useStore();

  const getTypes = () => {
    return store.typeList.map((element, index) => (
      <Option key={index} value={element.value} label={element.label}>
        {element.label}
      </Option>
    ));
  };

  const getStatus = () => {
    return store.statusList.map((el, index) => (
      <Option key={index} value={el.value} label={el.label}>
        {el.label}
      </Option>
    ));
  };

  const typesData = getTypes();
  const statusData = getStatus();

  if (typesData.length < 1) {
    return <div className="empty">No type data</div>;
  } else if (statusData.length < 1) {
    return <div className="empty">No status data</div>;
  }

  const onTypeChange = (value: number) => {
    store.setQueryFormItem({ type: value });
  };

  const onStatusChange = (value: number) => {
    store.setQueryFormItem({ status: value });
  };

  const onQuery = () => {
    store.setPaginationItem({ pageNum: 1 });
    store.getList();
  };

  const onReset = () => {
    store.resetQueryForm();
  };

  return (
    <div>
      <Row className="item-list">
        <Col span={8}>
          <Select value={store.queryForm.type} onChange={onTypeChange}>
            {typesData}
          </Select>
        </Col>
        <Col span={8}>
          <Select value={store.queryForm.status} onChange={onStatusChange}>
            {statusData}
          </Select>
        </Col>
      </Row>
      <div className="item-buttons">
        <Button onClick={onQuery}>Search</Button>
        <Button onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
};
```

</details>

Undeniably, components like the above are very common in actual development.

<details>
<summary>
We can use jsx-sfc to rewrite it (Click to expand)
</summary>

```tsx
const QueryForm = sfc({
  template: ({ data }, types, status) => (
    <>
      <Template name={types}>
        {() =>
          data.store.typeList.map((element, index) => (
            <Option key={index} value={element.value} label={element.label}>
              {element.label}
            </Option>
          ))
        }
      </Template>

      <Template name={status}>
        {() =>
          data.store.statusList.map((el, index) => {
            return (
              <Option key={index} value={el.value} label={el.label}>
                {el.label}
              </Option>
            );
          })
        }
      </Template>

      <Template>
        {() => {
          const typesData = types.template();
          const statusData = status.template();

          if (typesData.length < 1) {
            return <div className="empty">No type data</div>;
          } else if (statusData.length < 1) {
            return <div className="empty">No status data</div>;
          }

          return (
            <div>
              <Row className="item-list">
                <Col span={8}>
                  <Select value={data.store.queryForm.type} onChange={data.events.onTypeChange}>
                    {typesData}
                  </Select>
                </Col>
                <Col span={8}>
                  <Select value={data.store.queryForm.status} onChange={data.events.onStatusChange}>
                    {statusData}
                  </Select>
                </Col>
              </Row>
              <div className="item-buttons">
                <Button onClick={data.events.onQuery}>Search</Button>
                <Button onClick={data.events.onReset}>Reset</Button>
              </div>
            </div>
          );
        }}
      </Template>
    </>
  ),

  Component() {
    const store = useStore();

    return {
      store,

      events: {
        onTypeChange(value: number) {
          store.setQueryFormItem({ type: value });
        },

        onStatusChange(value: number) {
          store.setQueryFormItem({ status: value });
        },

        onQuery() {
          store.setPaginationItem({ pageNum: 1 });
          store.getList();
        },

        onReset() {
          store.resetQueryForm();
        }
      }
    };
  }
});
```

</details>

In this way:

- We can put all the logic codes into the `Component function` and manage it separately;
- Then we can put all the JSX codes into the `template function`, and support `sub template tags` to manage JSX codes that need to be reused.

**When the component code is large and the logic is complex, the benefits of visual isolation are obvious.**

### Better single file experience

<details>
<summary>
For example: Multiple components in a single file (Click to expand)
</summary>

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

</details>

<details>
<summary>
Then we use jsx-sfc to rewrite it (Click to expand)
</summary>

```tsx
const Todo = sfc(
  {
    Component({ onClick, completed, text, styles: { Wrapper }, svgProps }) {
      return (
        <Wrapper onClick={onClick}>
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
        </Wrapper>
      );
    },

    styles: {
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
    }
  },
  {
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
);

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

  styles: {
    Wrapper: styled.ul`
      margin: 20px 0;
      padding: 0;
    `
  }
});
```

</details>

As you can see, we can **organize codes with component granularity** to achieve better visual isolation effect.

When we organize component codes, we often have to divide them into multiple files, and sometimes the file switching action will cause a little upset. At this time, `jsx-sfc` can help you make this scene much easier. **We can still organize the code clearly even without a lot of fragmented files** 😊.

## API Design Principle

The API design principle of `jsx-sfc` can be defined as `Type First`.

### What is Type First

It can be explained in this way:

> If the type design can match the requirements, the corresponding logic implementation can be done.

<!-- todo: ts limitation based -->

<!-- ## FAQ -->

<!-- todo: { data: { xxx } } -->

<!-- todo: defferent from class component -->

## Roadmap

- Optimize runtime size
- Optimize compiled code

<!-- At present only React is supported. However, other framework versions will not be excluded in the future(e.g. Vue v3). -->

## Who is using

The author `Joe_Sky` and his front-end team in jd.com.

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
