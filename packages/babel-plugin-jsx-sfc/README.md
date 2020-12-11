# babel-plugin-jsx-sfc

Compile and enhance the limitation of `jsx-sfc` runtime code.

## How it works

```tsx
const App = sfc(
  {
    template({ data }) {
      ...
    },
    Component: (props) => {
      ...
    },
    style: () => ({
      ...
    })
  },
  {
    ...
  }
);

↓ ↓ ↓ ↓ ↓ ↓

const App = sfc((props) => { ... }, [
  {
    template({ data }) {
      ...
    },
    style: () => ({
      ...
    })
  },
  {
    ...
  }
]);
```
