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
  <img alt="jsx-sfc demo" src="https://user-images.githubusercontent.com/12705724/113466739-a75bee80-9470-11eb-8139-6aa54550a754.gif" width="500" />
</p>

| Package                                                                                            | Badges                                                                                                                                                                                                                                                                                                                                                                                                              | Supported frameworks |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/jsx-sfc)                           | <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a> | React                |
| [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc) | <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/babel-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/babel-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                        | React                |
| [vite-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/vite-plugin-jsx-sfc)   | <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/vite-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/vite-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                            | React                |
| [jsx-sfc.macro](https://github.com/joe-sky/jsx-sfc/tree/main/packages/jsx-sfc.macro)               | <a href="https://www.npmjs.org/package/jsx-sfc.macro"><img src="https://img.shields.io/npm/v/jsx-sfc.macro.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc.macro"><img src="https://img.shields.io/npm/dm/jsx-sfc.macro.svg" alt="NPM Downloads"></a>                                                                                                                                    | React                |
| [use-templates](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-templates)               | <a href="https://www.npmjs.org/package/use-templates"><img src="https://img.shields.io/npm/v/use-templates.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/use-templates"><img src="https://img.shields.io/npm/dm/use-templates.svg" alt="NPM Downloads"></a>                                                                                                                                    | React & Vue(v3)      |
| [use-view-data](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-view-data)               | <a href="https://www.npmjs.org/package/use-view-data"><img src="https://img.shields.io/npm/v/use-view-data.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/use-view-data"><img src="https://img.shields.io/npm/dm/use-view-data.svg" alt="NPM Downloads"></a>                                                                                                                                    | React                |

## Introduction

`jsx-sfc`(JSX Separate Function Components) is a tiny JSX/TSX toolkit(<1kb minimum) for create functional components with **separation of concerns**. It can be seen as JSX/TSX syntax or type tools, very simple to use🧙🏼‍♂️.

<!-- > Currently version is v1.0.0-alpha.x, the v1 version and full documentation will be completed soon. -->

[Live Demo is here](https://codesandbox.io/s/jsx-sfc-demo-wwgd4) (Experience **Typings/Hot reloading/Dev tools** by Codesandbox).

<!-- [Live Demo is here.](https://codesandbox.io/s/jsx-sfc-demo-jr2z0?file=/src/App.tsx) -->

> I'm sorting out the hooks syntax tools for separation of concerns: [use-templates](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-templates) and [use-view-data](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-view-data), they can be used with jsx-sfc or alone. Now it's experimenting in the actual project.

## Features

- 🌟 Easy way to define function components with **separation of concerns**
- ✨ Clearly isolate **template**, **logic**, **styles** and **any other concerns**
  <!-- - 🚩 New APIs for **defining and using static members** in function components -->
- 💫 **Completely type inference** design by TypeScript
  <!-- - 🕹 Support **export internal member types** from components (Documentation to be completed) -->
- 🎉 Support all React hooks
- 🔥 Support [React Fast Refresh](https://github.com/facebook/react/tree/master/packages/react-refresh)
- 🔧 Support React Eslint plugins
- 🔨 Support React dev tools
- ⚡ Performance almost equivalent to regular function components
- 🚀 No any dependencies (except compiler)

## Table of Contents

- [Motivation](#motivation)
- [Inspiration](#inspiration)
  - [Extending Function Component](#extending-function-component)
  - [Adapting Eslint Plugin](#adapting-eslint-plugin)
  - [Adapting Hot Reloading](#adapting-hot-reloading)
  - [Performance](#performance)
- [Examples](#examples)
- [Benefits](#benefits)
  - [Clearer visual isolation](#clearer-visual-isolation)
  - [Better single file experience](#better-single-file-experience)
    <!-- - [Exportable internal member types](#exportable-internal-member-types) -->
- [Installation](#installation)
  - [Using with Babel](#using-with-babel)
  - [Using with Vite](#using-with-vite)
  - [Using with CRA](#using-with-cra)
- [Usage](#usage)
  - [`sfc`](#sfc)
  - [`sfc.forwardRef`](#sfcforwardRef)
  - [Sub Templates](#sub-templates)
  - [Extension options](#extension-options)
  - [Export static members](#export-static-members)
- [API Design Principle](#api-design-principle)
- [Roadmap](#roadmap)
  - [Optimize runtime size](#optimize-runtime-size)
    <!-- - [Support Vue v3](#support-vue-v3) -->
  - [Add hooks syntax](#add-hooks-syntax)
- [Who is using](#who-is-using)

## Motivation

On the whole, my goal is to create a toolkit with similar syntax and useful structure for the scenario of using JSX to develop function components, according to the `mental model of single file components like Vue/Svelte/Marko`.

If you are already familiar with the similar Vue SFCs development model, you will find the syntax of this project so intuitive~

> I will continue to refine and summarize the comparison and pattern between this project and regular function components in the development of actual projects, and try to release it in the near future.

## Inspiration

This project was originally inspired by [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html). The point of Vue SFCs has been recognized by many people:

> Inside a component, it's template, logic and styles are inherently coupled, and collocating them actually makes the component more cohesive and maintainable.

However, the **separation of concerns** idea is very rare in the JSX(React) environment, only a few implementations from community:

- [one-loader](https://github.com/digitalie/one-loader)
- [react-sfc-swyx](https://github.com/react-sfc/react-sfc-swyx)

Overall, the above two solutions are to create a new file type for React to implement the idea similar to Vue SFCs. But the idea of this project is quite different from the above implementations:

_Considering that the original design principle of JSX is a syntax extension of the existing JavaScript, so I want to create a new SFC solution that is more accord with the existing JSX(React) development habits._

### Extending Function Component

Since the birth of react hooks, function component has been the main way to write React components. My main idea is to create an as simple as possible extension syntax for the existing function components that conforms to the idea of **separation of concerns**, and without creating any new tool chains(e.g. IDE syntax highlight plugin).

So I named it:

`Separate Function Components` (npm package named `jsx-sfc`, abbreviated as SFC also 😃)

It's implementation makes full use of **TypeScript generic inference**, and support the use of all React existing tool chains(e.g. CSS-in-JS/Eslint/HMR).

> Why not named react-sfc? In fact, the npm package name of react-sfc has been occupied([react-sfc-swyx](https://github.com/react-sfc/react-sfc-swyx)).

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

### Adapting Eslint Plugin

And if you configure the [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks), it also can check where you can use hooks:

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

### Adapting Hot Reloading

Finally, `jsx-sfc` can also support [React Fast Refresh](https://github.com/facebook/react/tree/master/packages/react-refresh). Because it has a [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc) to transform the runtime code into a format recognized by the [Babel plugin of React Fast Refresh](https://github.com/facebook/react/blob/master/packages/react-refresh/src/ReactFreshBabelPlugin.js) 😉.

<!-- See the demo, the main design ideas of `jsx-sfc`:

- Not single file, just separate functions.
- Extracting a separate template function.
- CSS in JS can be used in a separate style function.
- Extending any separate members(stores, graphqls, etc.).
- Exporting all separate members for reusing and testing.
- All of above support completely type inference. -->

<!-- tips: What features are needed to adapt to JSX environment -->

<!-- So `jsx-sfc` is similar to Vue SFCs in the form of separation of concerns, but it was originally designed to adapt the JSX(TSX) environment! -->

### Performance

`jsx-sfc` is a tool that supports compiler optimization, so it's performance is almost the same as that of normal React function components ⚡️. [Code comparison before and after compiling can refer to here.](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc#how-it-works)

## Examples

Here are some examples of **using different CSS in JS Solutions**, which basically cover all the current usage of `jsx-sfc`:

- [Redux Todo List (styles use Styled-Components)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/redux-todos)
- [React-i18next Example (styles use Emotion)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/react-i18next)
- [Simple Counter (styles use Jss)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/counter)
- [TailwindCss Starter (styles use TailwindCss)](https://github.com/joe-sky/jsx-sfc/tree/main/examples/tailwind-starter)

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

<!-- ### Exportable internal member types

> Documentation to be completed. -->

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
function sfc<Props, ViewData, Styles, EX>(
  options: {
    template?: (args: { data: ViewData; styles: Styles } & EX, ...tmpls: Template.Func[]) => JSX.Element;
    Component: (props?: Props & Styles & EX & { originalProps: Props }) => ViewData;
    styles?: Styles;
  },
  extensions?: EX
): React.FC<Props> & { template: (data?: ViewData), Component: React.FC<Props> } & Styles & EX;
```

Only a symbolic type definition is put here for API documentation, there are many differences in the actual implementation. [Actual type definition is here.](https://github.com/joe-sky/jsx-sfc/blob/main/packages/jsx-sfc/src/defineComponent.ts)

#### With separate template function

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

`jsx-sfc` allows you to choose a **CSS in JS Solution** to define the style of components, such as [styled-components](https://github.com/styled-components/styled-components), [Emotion](https://github.com/emotion-js/emotion). A styled-components example:

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

#### Without template function

If you don't like to use the `separate template function` to write JSX tags, you still can also use the `Component function` directly to return the JSX tags:

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

`jsx-sfc` uses `TS function overload feature` to ensure that it is still type safe without template function. If the component function does not return JSX tags, the type error will occurs.

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

// If you pass in TS generics, there's a pair of extra brackets after the generics; Otherwise, it's not necessary.
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

1. All parameters starting from the second parameter of the template function are sub template objects, and any number of them can be defined.

2. The template function needs to return a React.Fragment tag; The sub template tag without name property is the entry function:

```tsx
{
  template: ({ data }, tmpl1, tmpl2) => (
    <>
      <Template name={tmpl1}>{() => <div>foo</div>}</Template>

      <Template name={tmpl2}>{() => <div>bar</div>}</Template>

      <Template>
        {() => (
          <section>
            {tmpl1.template()}
            {tmpl2.template()}
          </section>
        )}
      </Template>
    </>
  );
}
```

3. In TSX, we can define the parameter types of sub template functions, this can achieve type safe:

```tsx
{
  template: ({ data }, header: Template.Func<string, number>) => (
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
            {header.template('posts', 100)}
            <div>body</div>
          </section>
        )}
      </Template>
    </>
  );
}
```

We can use sub template syntax to continue to separate the responsibilities of JSX tags, [see here for the specific benefits of sub templates.](#clearer-visual-isolation)

### Extension options

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
  // Notice: you need to pass in the second parameter, and also can pass in a function like styles.
  {
    utils: {
      trimWithPrefix(str: string) {
        return ('prefix_' + str.trim());
      }
    }
  }
});
```

For some advanced usages of extensions, see these examples:

- [React-i18next locales extension](https://github.com/joe-sky/jsx-sfc/blob/main/examples/react-i18next/src/App.tsx#L73)

- [Jss styles extension](https://github.com/joe-sky/jsx-sfc/blob/main/examples/counter/src/App.tsx#L60)

### Export static members

All members support exporting from `jsx-sfc` components:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

const App = sfc(
  {
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
  },
  {
    utils: {
      trimWithPrefix(str: string) {
        return 'prefix_' + str.trim();
      }
    }
  }
);

function Test() {
  const [user, setUser] = useState('bar');

  return (
    <>
      {App.template({ user, onClick: () => setUser('baz') })}
      <App.Component />
      <App.styles.Wrapper>{user}</App.styles.Wrapper>
      {App.utils.trimWithPrefix(user)}
    </>
  );
}
```

<!-- We can use the above feature to unit test each member of the component independently, or even reuse them into other components. -->

<!-- ### Using with TypeScript -->

<!-- todo: difference in strict mode -->

## API Design Principle

Before I decided on `jsx-sfc v1.0 API`, I actually made a lot of different attempts. Here are some of my summaries:

<!-- ### Why Type First

It can be explained in this way:

> If the type design can match the requirements, the corresponding logic implementation can be done. -->

### Why pass in TS generics like this

I once thought about to put generics directly into `sfc function` like this:

```tsx
interface Props {
  title: string;
}

const App = sfc<Props>({
  template: ({ data, styles }) => ...,
  Component: (props) => ...,
  styles: ...
});
```

However, this doesn't work because the parameters of template and Component contain dynamically inferred generics(e.g. `data` and `styles`). If they are defined in the same function together with `Props` generic, then you pass in `Props` generic manually, the type inference errors will appear.

This is limited to the fact that TS is not yet implemented **Partial Type Argument Inference**, you can refer to the following information for details: https://stackoverflow.com/questions/60377365/typescript-infer-type-of-generic-after-optional-first-generic. So I can only define `Props` generic in a separate function, and the API changes like this:

```tsx
interface Props {
  title: string;
}

const App = sfc<Props>()({ // There's a pair of extra brackets after the generics
  template: ({ data, styles }) => ...,
  Component: (props) => ...,
  styles: ...
});
```

### Why not use JSX tags as wrapper

If we use JSX Tags Wrapper like Vue SFCs, we can get better visual isolation effect(such as [jue](https://github.com/egoist/jue)):

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

### Why JSX tags function named template

I named the JSX tags function of `jsx-sfc` to `template`, mainly because of the following points:

1. If it is named `render`, it's not accurate for the rendering flow of the React function component.

Compared with the React class component, the whole function body of the React function component is the render process, which includes hooks, inline functions, and so on. Rendering JSX tags is only a part of it.

2. Not only `string template` can be named `template`, reusable functions can be called `template` also.

In order not to have doubts, I explain it specifically: The `template` and `sub template` in `jsx-sfc` are reusable, their responsibilities are limited to returning `JSX.Element` type and support TS type safe, so I called them `template`. There are also other projects that use `template` as JSX related APIs(such as [monobase](https://github.com/framer/monobase#styled-components)).

### Why the component function be capitalized

We know that in the world of React, functions that start with capital letters are defined as components, and the React ecosystem tools(e.g. Eslint) will be the same standard. So the `jsx-sfc` also follows this standard, it can adapt to the existing ecosystem tools only in this way.

<!-- todo: ts limitation based -->

<!-- ## FAQ -->

<!-- todo: { data: { xxx } } -->

<!-- todo: defferent from class component -->

## Puzzle of Types

There are many strange TS types problems encountered in the development of this project. Fortunately, these problems can be solved at present. [I recorded them in this issue.](https://github.com/joe-sky/jsx-sfc/issues/1)

## Roadmap

### Optimize runtime size

At present, `jsx-sfc` supports working without compiler, it's just that the syntax will be slightly different([See the test cases for details](https://github.com/joe-sky/jsx-sfc/tree/main/packages/jsx-sfc/__tests__/runtime)).

However, there is no version of the package which removes the runtime part yet. So I will optimize it here later, and the size of 1KB can be reduced a lot in the compiled version.

### Optimize compiled code

The compiled code of `jsx-sfc` has a few optimization space yet, which can continue to improve the runtime performance. I will gradually start to optimize it.

<!-- At present only React is supported. However, other framework versions will not be excluded in the future(e.g. Vue v3). -->

### About better syntax

If better syntax implementation details are found and if they're not compatible with v1.0 syntax, I will summarize them and arrange them to v2.0 implementation.

<!-- ### Support Vue v3

After a preliminary study, the `jsx-sfc for Vue v3` version can basically be implemented, which is roughly the following syntax:

```tsx
// Not yet implemented
import { ref } from 'vue';
import { css } from '@emotion/css';
import sfc from 'jsx-sfc-vue';

const App = sfc({
  template: ({ data, styles }) => (
    <section class={styles.wrapper}>
      <input value={data.count.value} onClick={data.onClick} />
    </section>
  ),

  setup() {
    const count = ref(0);

    return {
      count,
      onClick() {
        count.value++;
      }
    };
  },

  styles: {
    wrapper: css`
      font-size: 16px;
      color: #000;
    `
  }
});
```

The above is written in the regular way:

```tsx
import { defineComponent, ref } from 'vue';
import { css } from '@emotion/css';

const App = defineComponent(() => {
  const count = ref(0);

  return () => (
    <section
      class={css`
        font-size: 16px;
        color: #000;
      `}>
      <input value={count.value} />
    </section>
  );
});
```

It can be predicted that there will inevitably be problems in the process of implementation, and I will continue to try in the near future.

> The biggest difficulty lies in the processing of TS type. The return value [type of defineComponent API](https://github.com/vuejs/vue-next/blob/master/packages/runtime-core/src/apiDefineComponent.ts) is much more complex than React, and some types are not exported from Vue package. -->

### Add hooks syntax

These are currently being experimented. With hooks, they will be easier to integrate the concept of `separation of concerns` into the existing JSX based functional component development. I will sort out the relevant documentation soon:

- [use-templates](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-templates)

- [use-view-data](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-view-data)

Moreover, at present Vue composition API can also support syntax similar to hooks, so I will also consider developing Vue version, and this process should not be too difficult.

## Change Logs

[Check here.](https://github.com/joe-sky/jsx-sfc/blob/main/CHANGELOG.md)

## Who is using

The author `Joe_Sky` and his front-end team in jd.com. It has been used in more than 3 production systems.

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
