import { Plugin } from 'vite';
import { sfcTransform } from './transform';

const plugin: Plugin = {
  name: 'jsx-sfc',
  transforms: [sfcTransform]
};

export default plugin;
