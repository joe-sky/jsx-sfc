<h1 align="center">
  🌠 use-view-data
</h1>

## Introduction

`useViewData` is a tiny TS type tool for create React function components with **separation of concerns**. It's just to describe a function component development pattern, you can also not import it☄️.

## Community articles with similar or related ideas

- [Separation of concerns with custom React hooks](https://dev.to/areknawo/separation-of-concerns-with-custom-react-hooks-3aoe)

- [Must-Know Reusable Module Vs Component In Vue 3 Composition API](https://softauthor.com/vuejs-composition-api-reusable-module-vs-component)

## Installation

```bash
npm install use-templates
```

## Usage

The following code can pass the internal TS type of the parent component to the child component:

```tsx
import { useState, useEffect } from 'react';
import { createUseViewData, ViewDataType } from 'use-view-data';

interface AppProps {
  title: string;
}

type Data = ViewDataType<typeof useViewData>;

const useViewData = createUseViewData<AppProps>()(props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
  }, []);

  return {
    props,
    count,
    setCount
  };
});

const App: React.FC<AppProps> = props => {
  const data = useViewData(props);

  return <AddCount parent={data} />;
};

const AddCount: React.FC<{ parent: Data }> = props => {
  return <div onClick={() => parent.setCount(parent.count + 1)}>Add</div>;
};
```

> Documentation to be completed
