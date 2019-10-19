import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export const config: Config = {
  nodeResolve: { browser: true, preferBuiltins: false },
  enableCache: false,
  plugins: [
    builtins(),
    globals(),
    sass({
      injectGlobalPaths: [
        'src/styles/_variables.scss',
        'src/styles/_mixins.scss',
        'src/styles/main.scss',
      ]
    })
  ],
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'http://localhost:3030',
      serviceWorker: {
        swSrc: './src/sw.js'
      }
    }
  ],
  copy: [
    { src: 'robots.txt' },
    { src: 'sw.js' }
  ]
};

export const devServer = {
  root: 'www',
  watchGlob: '**/**'
};