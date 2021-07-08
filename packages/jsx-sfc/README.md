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
  <img alt="jsx-sfc demo" src="https://user-images.githubusercontent.com/12705724/113466739-a75bee80-9470-11eb-8139-6aa54550a754.gif" width="500" />
</p>

| Package                                                                                            | Badges                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Supported frameworks |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/jsx-sfc)                           | <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a>                                     | React                |
| [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc) | <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/babel-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/babel-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                                                            | React                |
| [vite-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/vite-plugin-jsx-sfc)   | <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/vite-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/vite-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                                                                | React                |
| [jsx-sfc.macro](https://github.com/joe-sky/jsx-sfc/tree/main/packages/jsx-sfc.macro)               | <a href="https://www.npmjs.org/package/jsx-sfc.macro"><img src="https://img.shields.io/npm/v/jsx-sfc.macro.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc.macro"><img src="https://img.shields.io/npm/dm/jsx-sfc.macro.svg" alt="NPM Downloads"></a>                                                                                                                                                                        | React                |
| [use-templates](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-templates)               | <a href="https://www.npmjs.org/package/use-templates"><img src="https://img.shields.io/npm/v/use-templates.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/use-templates"><img src="https://img.shields.io/npm/dm/use-templates.svg" alt="NPM Downloads"></a> <a href="https://bundlephobia.com/result?p=use-templates"><img src="https://img.shields.io/bundlephobia/minzip/use-templates.svg?style=flat" alt="Minzipped Size"></a> | React/Vue(v3)        |

## Introduction

`jsx-sfc`(JSX Separate Function Components) is a tiny toolkit(~1kb) that help you to better implement **separation of concerns** within JSX based functional components. It can be seen as a JSX/TSX syntax or type tool, very simple to use🧙🏼‍♂️.

[Live Demo is here](https://codesandbox.io/s/jsx-sfc-demo-wwgd4) (Experience **Typings/Hot reloading/Dev tools** by Codesandbox).

<!-- [Live Demo is here.](https://codesandbox.io/s/jsx-sfc-demo-jr2z0?file=/src/App.tsx) -->

<!-- > I'm sorting out the hooks syntax tools for separation of concerns: [use-templates](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-templates) and [use-view-data](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-view-data), they can be used with jsx-sfc or alone. Now it's experimenting in the actual project. -->

<!-- > The v1.3 version will be released soon, there are some new features and documentation to be completed. There is no breaking API change this time, but this version will include the more in-depth reflections on the problems that this project solves. -->

## Features

- ✨ Clearly separate **JSX tags**, **logic**, **styles** and **any other concerns** within JSX based functional components
  <!-- - 🚩 New APIs for **defining and using static members** in function components -->
- 💫 **Completely type inference** design by TypeScript
  <!-- - 🕹 Support **export internal member types** from components (Documentation to be completed) -->
- 🎉 Support all React hooks
- 🔥 Support [React Fast Refresh](https://github.com/facebook/react/tree/master/packages/react-refresh)
- 🔧 Support React Eslint plugins
- 🔨 Support React dev tools
- ⚡ Performance almost equivalent to regular function components
- 🚀 No any dependencies (except compiler)
- 💻 Support **Split Editor** similar to [Volar](https://github.com/johnsoncodehk/volar) by [vscode-jsx-sfc](https://marketplace.visualstudio.com/items?itemName=joe-sky.vscode-jsx-sfc)

## Table of Contents

- [Motivation](#motivation)
  - [Inspiration](#inspiration)
  - [API design idea](#api-design-idea)
  - [Adapting Eslint Plugin](#adapting-eslint-plugin)
  - [Adapting Hot Reloading](#adapting-hot-reloading)
  - [Performance](#performance)
    - [Benchmark](#benchmark)
  - [About hooks API](#about-hooks-api)
- [Examples](#examples)
- [Benefits](#benefits)
  - [Clearer visual isolation](#clearer-visual-isolation)
  - [Better single file experience](#better-single-file-experience)
    <!-- - [Exportable internal state types](#exportable-internal-state-types) -->
- [Installation](#installation)
  - [Using with Babel](#using-with-babel)
  - [Using with Vite](#using-with-vite)
  - [Using with CRA](#using-with-cra)
- [Usage](#usage)
  - [`sfc`](#sfc)
  - [`sfc.forwardRef`](#sfcforwardRef)
  - [Props](#props)
  - [Static](#static)
  - [Export static members](#export-static-members)
  - [Template tags](#template-tags)
    - [`use-templates`](#use-templates)
      <!-- - [Extensions](#extensions) -->
- [API Design Principle](#api-design-principle)
- [Roadmap](#roadmap)
- [Who is using](#who-is-using)

## Motivation

On the whole, this tool can help you to write `highly cohesive React function components with clear responsibilities`, which draws on the mental model similar to single file components like `Vue/Svelte/Marko`.

### Inspiration

It's a very interesting idea to implement the SFCs like structure for JSX based function components, I got this inspiration because I found [this project](https://github.com/egoist/jue) by accident. Then I found these interesting projects with similar ideas:

- [one-loader](https://github.com/digitalie/one-loader)
- [react-sfc-swyx](https://github.com/react-sfc/react-sfc-swyx)

Overall, the above two solutions are to create a new file type for React to implement the idea similar to SFCs. But the idea of this tool is quite different from the above implementations:

_Considering that the original design principle of JSX is a syntax extension of the existing JavaScript, so I want to create a new SFC solution that is more accord with the existing JSX(React) development habits._

### Problems to be solved

And it's not just about interest. I'm trying to solve some problems:

- scattered components

Because React can only split code according to component or hook dimension, many scattered small components may appear in such a complete business. However the documentation of business code are always limited, which makes it difficult for a new project successor to understand the relationship between these small components.

So I want to achieve the goal of reducing the number of small components at least to a certain extent by reasonably dividing the code inside the function components.

- scattered styles

When we use the CSS in JS framework(such as [styled-components](https://github.com/styled-components/styled-components), [Emotion](https://github.com/emotion-js/emotion)), if there is a large amount of style code, we have to extract them as separate files, which seems to be no different from the development method of importing CSS files directly.

If we can have a preset location in the component code file to place styles, we can reduce the mental burden of switching between multiple styles or component files, and give full play to the features of the CSS in JS framework.

<!-- On the whole, the goal of `jsx-sfc` is to create a toolkit with similar syntax and useful structure for the scenario of using JSX to develop functional components, according to the `mental model of single file components like Vue/Svelte/Marko`. My vision is bring the **ability that divide code responsibilities** add into the existing functional component syntax, to make the code look clearer and easier to maintain.

If you are already familiar with the similar SFCs development mode and understand the advantages, you will find the syntax of `jsx-sfc` so intuitive~ Of course, in addition to the syntax structure similar to SFCs, this project will also provide some additional benefits, which will be explained below. -->

### API design idea

Since the birth of react hooks, function component has been the main way to write React components. My main idea is to create an as simple as possible extension syntax for the existing function components that conforms to the idea of **separation of concerns**, and without creating any new tool chains(e.g. IDE syntax highlight plugin).

So I named it:

`Separate Function Components` (npm package named `jsx-sfc`, abbreviated as SFC also)

It's implementation makes full use of **TypeScript generic inference**, and support the use of all React existing tool chains(e.g. CSS-in-JS/Eslint/HMR).

> Why not named react-sfc? In fact, the npm package name of react-sfc has been occupied([react-sfc-swyx](https://github.com/react-sfc/react-sfc-swyx)). But more importantly, the idea of this project can be extended to other frameworks that support JSX(e.g. using JSX in Vue).

A simple demo, when we write a React function component module(with CSS-in-JS) like this:

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

Such this component structure at first glance, we can immediately distinguish the responsibilities of each part of the code. From this syntax structure, we can easily extract the TS type of internal state of a component, like this:

```tsx
import sfc, { ComponentDataType } from 'jsx-sfc';

const App = sfc({
  template: ({ data }) => (
    <>
      <i>{data.count}</i>
      <AddCount {...data} />
    </>
  ),

  Component() {
    const [count, setCount] = useState({ value: 0 });
    return { count, setCount };
  }
});

const AddCount: React.FC<ComponentDataType<typeof App>> = ({ count, setCount }) => (
  // Note that TS can easily infer the internal state type of the parent component in the child component, even very complex types.
  <button onClick={() => setCount({ value: count.value + 1 })}>Add count</button>
);
```

[See here for specific advantages compared with regular components.](#benefits)

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

Finally, `jsx-sfc` can also support [React Fast Refresh](https://github.com/facebook/react/tree/master/packages/react-refresh). Because it has a [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc) to transform the runtime code into a format recognized by the [Babel plugin of React Fast Refresh](https://github.com/facebook/react/blob/master/packages/react-refresh/src/ReactFreshBabelPlugin.js).

### Performance

`jsx-sfc` is a tool that supports compiler optimization, so it's performance is almost the same as that of normal React function components ⚡️. [Code comparison before and after compiling can refer to here.](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc#how-it-works)

#### Benchmark

[Here is a simple benchmark.](https://github.com/joe-sky/jsx-sfc/tree/main/examples/benchmark)

### About hooks API

If you prefer to use regular functional component syntax, you can take a look at this custom hook:

- [use-templates](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-templates)

It extract a core feature of `jsx-sfc` and can be used independently.

<!-- > I will continue to refine and summarize the comparison and pattern between this project and regular function components in the development of actual projects, and try to release it in the near future. -->

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
          const typesData = types.render();
          const statusData = status.render();

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
- Then we can put all the JSX codes into the `template function`, and support `template tags` to manage JSX codes that need to be reused.

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
const Todo = sfc({
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

  static: {
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

When we organize component codes, we often have to divide them into multiple files, and sometimes the file switching action will cause a little upset. At this time, `jsx-sfc` can help you make this scene much easier. **We can still organize the code clearly even without a lot of fragmented files**.

<!-- ### Exportable internal state types

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
function sfc<Props, ComponentData, Styles, Static>(
  options: {
    template?: (args: { data: ComponentData; props: Props; styles: Styles } & Static, ...templates: TemplateRender[]) => JSX.Element;
    Component: (props?: Props & Styles & Static & { props: Props }) => ComponentData;
    styles?: Styles;
    static?: Static;
  }
): React.FC<Props> & { template: (data?: ComponentData), Component: React.FC<Props> } & Styles & Static;
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

#### Using Props in template

The `props` is also used in the `template function` like this:

```tsx
const App = sfc({
  template: ({ props, data, styles: { Wrapper } }) => (
    <Wrapper>
      {props.name}
      <button onClick={data.onClick}>{data.user}</button>
    </Wrapper>
  ),

  Component(props) {
    const [user, setUser] = useState(props.name);
    return { user, onClick: () => setUser('bar') };
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

### Static

The `static` function is used to create static members of a component, then you can use these static members in the `Component` or `template` function:

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

  Component({ constant: { foo } }) {
    const [user, setUser] = useState(foo);
    return { user, onClick: () => setUser('bar') };
  },

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
  template: ({ data, styles: { Wrapper }, utils: { trimWithPrefix } }) => (
    <Wrapper>
      <button onClick={data.onClick}>{trimWithPrefix(data.user)}</button>
    </Wrapper>
  ),

  Component() {
    const [user, setUser] = useState('foo');
    return { user, onClick: () => setUser('bar') };
  },

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
      {App.template({ user, onClick: () => setUser('baz') })}
      <App.Component />
      <App.styles.Wrapper>{user}</App.styles.Wrapper>
      {App.utils.trimWithPrefix(user)}
    </>
  );
}
```

### Template tags

In the template function of `jsx-sfc` components, we can also create reusable multiple template functions:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc, { Template } from 'jsx-sfc';

const App = sfc({
  template: ({ data, styles: { Wrapper } }, btn, text: Template.Render<number>) => (
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

1. All parameters starting from the second parameter of the template function are template tag renders, and any number of them can be defined.

2. The template function needs to return a React.Fragment tag; The template tag without name property is the entry function:

```tsx
{
  template: ({ data }, tmpl1, tmpl2) => (
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

3. In TSX, we can define the parameter types of template tag render functions, this can achieve type safe:

```tsx
{
  template: ({ data }, header: Template.Render<string, number>) => (
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

We can use template tags syntax to continue to separate the responsibilities of JSX tags, [see here for the specific benefits of template tags.](#clearer-visual-isolation)

#### `use-templates`

The multiple templates feature has a independent implementation of hooks syntax, which supports React/Vue(v3). [Please see the documentation here.](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-templates)

<!-- ### Extensions

Except template and styles, other extensions for `jsx-sfc` components are also supported:

```tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import sfc from 'jsx-sfc';

const App = sfc(
  {
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
    }
  },
  // You need to pass in the second parameter
  {
    utils: {
      trimWithPrefix(str: string) {
        return 'prefix_' + str.trim();
      }
    }
  }
);
```

And also can pass in a function like styles:

```tsx
const App = sfc(
  {
    template: ({ data, utils: { trimWithPrefix } }) => ...,
    ...
  },
  () => {
    return {
      utils: {
        trimWithPrefix(str: string) {
          return 'prefix_' + str.trim();
        }
      }
    }
  }
);
```

For some advanced usages of extensions, see these examples:

- [React-i18next locales extension](https://github.com/joe-sky/jsx-sfc/blob/main/examples/react-i18next/src/App.tsx#L73)

- [Jss styles extension](https://github.com/joe-sky/jsx-sfc/blob/main/examples/counter/src/App.tsx#L60) -->

<!-- We can use the above feature to unit test each member of the component independently, or even reuse them into other components. -->

<!-- ### Using with TypeScript -->

<!-- todo: difference in strict mode -->

## API Design Principle

Before I decided on `jsx-sfc v1.0 API`, I actually made a lot of different attempts. Here are some of my summaries:

<!-- ### Why Type First

It can be explained in this way:

> If the type design can match the requirements, the corresponding logic implementation can be done. -->

### Can't use **this variable**

The `jsx-sfc` is a syntax extension for functional components, although it uses the syntax structure of `object method`, but it's only to better reflect the visual perception. Its features are exactly the same as functional components, so there is no `this variable`.

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

<!-- ### Why JSX tags function named template

I named the JSX tags function of `jsx-sfc` to `template`, mainly because of the following points:

1. If it is named `render`, it's not accurate for the rendering flow of the React function component.

Compared with the React class component, the whole function body of the React function component is the render process, which includes hooks, inline functions, and so on. Rendering JSX tags is only a part of it.

2. Not only `string template` can be named `template`, reusable functions can be called `template` also.

In order not to have doubts, I explain it specifically: The `template function` and `template tags` in `jsx-sfc` are reusable, their responsibilities are limited to returning `JSX.Element` type and support TS type safe.

So the name `template` is just to conform to the SFCs model that has been widely recognized by people, and make it easier for people to remember that `template` is specially used to place tag syntax, and they can be reused. -->

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

<!-- ### Add hooks syntax

These are currently being experimented. With hooks, they will be easier to integrate the concept of `separation of concerns` into the existing JSX based functional component development. I will sort out the relevant documentation soon:

- [use-templates](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-templates)

- [use-view-data](https://github.com/joe-sky/jsx-sfc/tree/main/packages/use-view-data)

Moreover, at present Vue composition API can also support syntax similar to hooks, so I will also consider developing Vue version, and this process should not be too difficult. -->

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
