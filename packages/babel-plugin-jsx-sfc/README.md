# babel-plugin-jsx-sfc

Babel plugin for compile and enhance the limitation of `jsx-sfc` runtime code.

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

    style: () => { ... }
  },
  {
    utils: () => { ... }
  }
);

↓ ↓ ↓ ↓ ↓ ↓

const $sfcFuncResults_lineNo = sfc.createFuncResults([
  {
    template({ data }) {
      ...
    },

    style: () => ({
      ...
    })
  },
  {
    utils: () => { ... }
  }
], 1);

const App = sfc((props) => {
  ...
  return $sfcFuncResults_lineNo.template({ ... });
}, $sfcFuncResults_lineNo);
```
