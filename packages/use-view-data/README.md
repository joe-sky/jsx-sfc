<h1 align="center">
  🌠 use-view-data
</h1>

## Introduction

`useViewData` is a tiny TS type tool that **separating the logic concerns** of React function components. It's just to describe a development pattern, you can also not import it.

## Features

- 🌟 Easy to create a structure that separates logic and JSX tags, can support multi file components
- 💫 Support export internal member types from components, easy to split child components
- 🚀 Tiny size, only ~200b and no any dependencies

## Installation

```bash
npm install use-templates
```

## Usage

The following code can pass the internal TS type of the parent component to the child component. Note that TS can easily infer the internal state type of the parent component in the child component, even very complex types.

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
  return <div onClick={() => parent.setCount(parent.count + 1)}>{parent.props.title}</div>;
};
```

<!-- ### Using with Vue

```tsx
import { defineComponent, reactive, onMounted, PropType } from 'vue';
import { ViewDataType } from 'use-view-data';

type Data = ViewDataType<typeof useViewData>;

function useViewData(props: { title: string }) {
  const state = reactive({
    count: 0
  });

  onMounted(() => {
    console.log('Mounted!');
  });

  return {
    props,
    state
  };
}

const App = defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const data = useViewData(props);

    return () => <AddCount parent={data} />;
  }
});

const AddCount = defineComponent({
  props: {
    parent: {
      type: Object as PropType<Data>,
      required: true
    }
  },

  setup({ parent }) {
    return () => (
      <div>
        <i>{parent.state.count}</i>
        <button onClick={() => (parent.state.count += 1)}>{parent.props.title}</button>
      </div>
    );
  }
});
``` -->

## Community articles with similar or related ideas

- [Separation of concerns with custom React hooks](https://dev.to/areknawo/separation-of-concerns-with-custom-react-hooks-3aoe)

- [Must-Know Reusable Module Vs Component In Vue 3 Composition API](https://softauthor.com/vuejs-composition-api-reusable-module-vs-component)

- [Function-based component API extended discussion in RFCs of Vue](https://github.com/vuejs/rfcs/issues/55)

> Documentation to be completed
