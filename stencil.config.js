const sass = require('@stencil/sass');
exports.config = {
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
        swSrc: 'sw.js',
        globPatterns: [
          '**/*.{html,js,css,json,ico,png,es5}'
        ]
      },
      dir: 'public'
    }
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
