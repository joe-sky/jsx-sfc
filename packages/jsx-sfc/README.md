<h1 align="center">
  JSX Separate Function Components
  <div>
    <a href="https://travis-ci.org/joe-sky/jsx-sfc"><img src="https://travis-ci.org/joe-sky/jsx-sfc.svg?branch=main" alt="Travis CI Status"></a>
    <a href="https://codecov.io/gh/joe-sky/jsx-sfc"><img src="https://codecov.io/gh/joe-sky/jsx-sfc/branch/main/graph/badge.svg" alt="Codecov"></a>
    <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a>
    <!-- <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> -->
    <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a>
    <a href="https://www.npmjs.com/package/jsx-sfc"><img src="https://img.shields.io/npm/l/jsx-sfc.svg" alt="License"></a>
  </div>
</h1>

<p align="center">
  <img alt="jsx-sfc demo" src="https://github.com/joe-sky/jsx-sfc/blob/main/public/images/sfc.gif?raw=true" width="500" />
</p>

`jsx-sfc`(JSX Separate Function Components) is a tiny tool(~1kb) for create React function components with **separation of concerns** and **completely type inference**. It can be seen as a JSX/TSX syntax or type tool, very simple to use🧙🏼‍♂️.

> Currently version is v1.0.0-alpha.x, the v1 version and full documentation will be completed soon.

## Demo

[Live demo is here.](https://codesandbox.io/s/jsx-sfc-demo-wwgd4)

> Currently this live demo is a runtime syntax version, and will be changed to a compiled version later.

## Features

- 🌟 Easy way to define function components with **separation of concerns**
- ✨ Clearly isolate **template**, **logic**, **styles** and **any other concerns**
- 💫 **Completely type inference** design by TypeScript
- 🔥 Support all React hooks
- ⚡ Support React Fast Refresh
- 🔧 Support React eslint plugins
- 🚀 No dependencies and side effects

## Examples

- [Simple Counter](https://github.com/joe-sky/jsx-sfc/tree/main/examples/counter)
- [Redux Todo List](https://github.com/joe-sky/jsx-sfc/tree/main/examples/redux-todos)
- [TailwindCss Starter](https://github.com/joe-sky/jsx-sfc/tree/main/examples/tailwind-starter)

## Packages

| Package                                                                                            | Badges                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/jsx-sfc)                           | <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/v/jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/jsx-sfc"><img src="https://img.shields.io/npm/dm/jsx-sfc.svg" alt="NPM Downloads"></a> <a href="https://bundlephobia.com/result?p=jsx-sfc"><img src="https://img.shields.io/bundlephobia/minzip/jsx-sfc.svg?style=flat" alt="Minzipped Size"></a> |
| [babel-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/babel-plugin-jsx-sfc) | <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/babel-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/babel-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/babel-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                        |
| [vite-plugin-jsx-sfc](https://github.com/joe-sky/jsx-sfc/tree/main/packages/vite-plugin-jsx-sfc)   | <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/v/vite-plugin-jsx-sfc.svg" alt="NPM Version"></a> <a href="https://www.npmjs.org/package/vite-plugin-jsx-sfc"><img src="https://img.shields.io/npm/dm/vite-plugin-jsx-sfc.svg" alt="NPM Downloads"></a>                                                                                                            |

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Examples](#examples)
- [Packages](#packages)
- [Inspiration](#inspiration)
- [Benefits](#benefits)
- [Installation](#installation)
  - [Using with Webpack](#using-with-webpack)
  - [Using with Vite](#using-with-vite)
- [Usage](#usage)
  - [`sfc`](#sfc)
  - [`sfc.forwardRef`](#sfc.forwardRef)
  - [Multiple Templates](#multiple-templates)
  - [Extensions](#extensions)
  - [Export Members](#export-members)
- [API Design Principle](#api-design-principle)
- [Roadmap](#roadmap)
- [Who is using](#who-is-using)

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

Now, we can use `jsx-sfc` to rewrite it with **separation of concerns** and **type safe**:

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
  const { contractStore } = useStore();

  const getContractTypeChildren = () => {
    return contractStore.contractTypeList.map((element, index) => (
      <Select.Option key={index} value={element.value} label={element.label}>
        {element.label}
      </Select.Option>
    ));
  };

  const getContractStatusChildren = () => {
    return contractStore.contractStatusList.map((el, index) => (
      <Select.Option key={index} value={el.value} label={el.label}>
        {el.label}
      </Select.Option>
    ));
  };

  const onProjectNameChange = (e: any) => {
    contractStore.setContractQueryFormItem({ projectName: e.target.value });
  };

  const onContractCodeChange = (e: any) => {
    contractStore.setContractQueryFormItem({ contractCode: e.target.value });
  };

  const onContractTypeChange = (value: number) => {
    contractStore.setContractQueryFormItem({ contractType: value });
  };

  const onContractStatusChange = (value: number) => {
    contractStore.setContractQueryFormItem({ contractStatus: value });
  };

  const onQueryHandle = () => {
    contractStore.resetSelectedKeys();
    contractStore.setMirrorContractQueryForm();
    contractStore.setPaginationItem({ pageNum: 1 });
    contractStore.getContractList();
  };

  const onResetHandle = () => {
    contractStore.resetQueryForm();
  };

  return (
    <div>
      <Row className="item-list">
        <Col span={8}>
          <Select
            className="item-input"
            value={contractStore.contractQueryForm.contractType}
            onChange={onContractTypeChange}>
            {getContractTypeChildren()}
          </Select>
        </Col>
        <Col span={8}>
          <Select
            className="item-input"
            value={contractStore.contractQueryForm.contractStatus}
            onChange={onContractStatusChange}>
            {getContractStatusChildren()}
          </Select>
        </Col>
      </Row>
      <Row className="item-list">
        <Col span={8}>
          <Input
            value={contractStore.contractQueryForm.projectName}
            onChange={onProjectNameChange}
            className="item-input"
          />
        </Col>
        <Col span={8}>
          <Input
            value={contractStore.contractQueryForm.contractCode}
            onChange={onContractCodeChange}
            className="item-input"
          />
        </Col>
      </Row>
      <div className="item-buttons">
        <Button onClick={onQueryHandle} type="primary" className="btn" ghost>
          Search
        </Button>
        <Button onClick={onResetHandle} className="btn">
          Reset
        </Button>
      </div>
    </div>
  );
};
```

</details>

Undeniably, components like the above are very common in actual development. We can use `jsx-sfc` to rewrite it:

```tsx
const QueryForm = sfc({
  template: ({ data }, typeChildren, statusChildren) => (
    <>
      <Template name={typeChildren}>
        {() =>
          data.store.contractTypeList.map((element, index) => (
            <Select.Option key={index} value={element.value} label={element.label}>
              {element.label}
            </Select.Option>
          ))
        }
      </Template>

      <Template name={statusChildren}>
        {() =>
          data.store.contractStatusList.map((el, index) => {
            return (
              <Select.Option key={index} value={el.value} label={el.label}>
                {el.label}
              </Select.Option>
            );
          })
        }
      </Template>

      <Template>
        {() => (
          <div>
            <Row className="item-list">
              <Col span={8}>
                <Select
                  className="item-input"
                  value={data.store.contractQueryForm.contractType}
                  onChange={data.onContractTypeChange}>
                  {typeChildren.template()}
                </Select>
              </Col>
              <Col span={8}>
                <Select
                  className="item-input"
                  value={data.store.contractQueryForm.contractStatus}
                  onChange={data.onContractStatusChange}>
                  {statusChildren.template()}
                </Select>
              </Col>
            </Row>
            <Row className="item-list">
              <Col span={8}>
                <Input
                  value={data.store.contractQueryForm.projectName}
                  onChange={data.onProjectNameChange}
                  className="item-input"
                />
              </Col>
              <Col span={8}>
                <Input
                  value={data.store.contractQueryForm.contractCode}
                  onChange={data.onContractCodeChange}
                  className="item-input"
                />
              </Col>
            </Row>
            <div className="item-buttons">
              <Button onClick={data.onQueryHandle} type="primary" className="btn" ghost>
                Search
              </Button>
              <Button onClick={data.onResetHandle} className="btn">
                Reset
              </Button>
            </div>
          </div>
        )}
      </Template>
    </>
  ),

  Component() {
    const { contractStore } = useStore();

    return {
      store: contractStore,

      onProjectNameChange(e: any) {
        contractStore.setContractQueryFormItem({ projectName: e.target.value });
      },

      onContractCodeChange(e: any) {
        contractStore.setContractQueryFormItem({ contractCode: e.target.value });
      },

      onContractTypeChange(value: number) {
        contractStore.setContractQueryFormItem({ contractType: value });
      },

      onContractStatusChange(value: number) {
        contractStore.setContractQueryFormItem({ contractStatus: value });
      },

      onQueryHandle() {
        contractStore.resetSelectedKeys();
        contractStore.setMirrorContractQueryForm();
        contractStore.setPaginationItem({ pageNum: 1 });
        contractStore.getContractList();
      },

      onResetHandle() {
        contractStore.resetQueryForm();
      }
    };
  }
});
```

### Better single file experience

<details>
<summary>
For example: Multiple components in a single file (Click to expand)
</summary>
</details>

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

### Multiple Templates

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

At present only React is supported. However, other framework versions will not be excluded in the future(e.g. Vue v3).

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
