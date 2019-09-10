var sass = require('@stencil/sass');
var builtins = require('rollup-plugin-node-builtins');
var globals = require('rollup-plugin-node-globals');
exports.config = {
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

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
