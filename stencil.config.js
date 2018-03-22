// const sass = require('@stencil/sass');
const sass = require('./temp-sass-fix');

exports.config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/_variables.scss',
        'src/styles/_mixins.scss',
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
