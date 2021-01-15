# babel-plugin-jsx-sfc

Babel plugin for compile and enhance the limitation of `jsx-sfc` runtime code.

## How it works

```tsx
const App = sfc(
  {
    template({ data }) { ... },
    Component: (props) => { ... },
    style: () => { ... }
  },
  {
    hooks: () => { ... },
    utils: () => { ... }
  }
);

↓ ↓ ↓ ↓ ↓ ↓

const $sfcFuncResults_123 = sfc.createFuncResults([
  {
    template({ data }) { ... },
    style: () => ({ ... })
  },
  {
    hooks: () => { ... },
    utils: () => { ... }
  }
]);

const App = sfc((props) => {
  ...
  return $sfcFuncResults_123.template({ ... });
}, $sfcFuncResults_123);
```
