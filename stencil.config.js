var sass = require('@stencil/sass');
exports.config = {
  nodeResolve: { browser: true, preferBuiltins: true },
  enableCache: false,
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
      serviceWorker: {
        swSrc: 'sw.js',
        globPatterns: [
          '**/*.{html,js,css,json,ico,png,jpg,es5}'
        ]
      }
    }
  ],
  copy: [
    { src: 'robots.txt' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
