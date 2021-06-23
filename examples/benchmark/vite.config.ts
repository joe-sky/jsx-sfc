import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import jsxSfc from 'vite-plugin-jsx-sfc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [jsxSfc(), reactRefresh()]
});
