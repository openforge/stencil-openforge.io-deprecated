import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  nodeResolve: { browser: true, preferBuiltins: false },
  plugins: [
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
      baseUrl: 'https://openforge.io/',
      serviceWorker: {
        swSrc: './src/sw.js'
      },
      copy: [
        { src: 'robots.txt' },
        { src: 'sw.js' }
      ]
    }
  ]
};