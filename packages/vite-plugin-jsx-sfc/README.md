# vite-plugin-jsx-sfc

Vite plugin for compile and enhance the limitation of `jsx-sfc` runtime code.

## Usage

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
