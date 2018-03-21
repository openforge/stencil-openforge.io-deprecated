const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        // 'node_modules/bootstrap/scss/bootstrap',
        'src/styles/variables.scss',
        'src/styles/mixins.scss',
        'src/styles/main.scss'
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
