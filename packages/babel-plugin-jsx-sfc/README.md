# babel-plugin-jsx-sfc

Babel plugin for compile and enhance the limitation of `jsx-sfc` runtime code.

## How it works

```tsx
const App = sfc({
  template({ data }) { ... },
  Component: (props) => { ... },
  static: {
    hooks: { ... },
    utils: { ... }
  },
  styles: () => ({ ... })
});

↓ ↓ ↓ ↓ ↓ ↓

// "123" is line number
const $sfcOptions_123 = sfc.createOptions({
  template({ data }) { ... },
  static: {
    hooks: { ... },
    utils: { ... }
  },
  styles: () => ({ ... })
});

// Extract the actual component function
const Sfc_123 = (props) => {
  ...
  return $sfcOptions_123.template({ ... });
};
Sfc_123.displayName = 'App';

// It's just use Object.assign to merge members of "$sfcOptions_123" to create final component function.
const App = sfc(Sfc_123, $sfcOptions_123);
```
