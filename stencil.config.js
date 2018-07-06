const sass = require('@stencil/sass');
exports.config = {
  enableCache: false,
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/_variables.scss',
        'src/styles/_mixins.scss',
      ]
    })
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        globPatterns: [
          '**/*.{html,js,css,json,ico,png,es5}'
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
