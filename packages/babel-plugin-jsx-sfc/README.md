# babel-plugin-jsx-sfc

Babel plugin for compile and enhance the limitation of `jsx-sfc` runtime code.

## How it works

```tsx
const App = sfc(
  {
    template({ data }) { ... },
    Component: (props) => { ... },
    styles: () => ({ ... })
  },
  () => ({
    hooks: { ... },
    utils: { ... }
  })
);

↓ ↓ ↓ ↓ ↓ ↓

const $sfcFuncResults_123 = sfc.createFuncResults(
  {
    template({ data }) { ... },
    styles: () => ({ ... })
  },
  () => ({
    hooks: { ... },
    utils: { ... }
  })
);

const App = sfc((props) => {
  ...
  return $sfcFuncResults_123.template({ ... });
}, $sfcFuncResults_123);
```
