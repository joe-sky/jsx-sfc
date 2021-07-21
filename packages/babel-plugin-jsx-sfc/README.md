# babel-plugin-jsx-sfc

Babel plugin for compile and enhance the limitation of `jsx-sfc` runtime code.

## How it works

```tsx
const App = sfc({
  Component: (props) => { ... },
  static: {
    hooks: { ... },
    utils: { ... }
  },
  render({ data }) { ... },
  styles: () => ({ ... })
});

↓ ↓ ↓ ↓ ↓ ↓

// "123" is line number
const $sfcOptions_123 = sfc.createOptions({
  static: {
    hooks: { ... },
    utils: { ... }
  },
  render({ data }) { ... },
  styles: () => ({ ... })
});

// Extract the actual component function
const Sfc_123 = (props) => {
  ...
  return $sfcOptions_123.render({ ... });
};
Sfc_123.displayName = 'App';

// It's just use Object.assign to merge members of "$sfcOptions_123" to create final component function.
const App = sfc(Sfc_123, $sfcOptions_123);
```

## License

MIT
