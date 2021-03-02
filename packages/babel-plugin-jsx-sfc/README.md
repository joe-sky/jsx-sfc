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

const $sfcOptions_123 = sfc.createOptions(
  {
    template({ data }) { ... },
    styles: () => ({ ... })
  },
  () => ({
    hooks: { ... },
    utils: { ... }
  })
);

const Sfc_123 = (props) => {
  ...
  return $sfcOptions_123.template({ ... });
};

const App = sfc(Sfc_123, $sfcOptions_123);
```
