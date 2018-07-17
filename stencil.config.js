// injectGlobalPaths takes the place of individual import statements within our files.  It injects it to every
const sass = require('@stencil/sass');
exports.config = {
  enableCache: false,
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/main.scss'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'sw.js',
        globPatterns: [
          '**/*.{html,js,css,json,ico,png,es5}'
        ]
      }
    }
  ],
  globalStyle: 'src/styles/main.scss',
  copy: [
    { src: 'robots.txt' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
