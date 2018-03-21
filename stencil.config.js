// const sass = require('@stencil/sass');
const sass = require('./temp-sass-fix');

exports.config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/variables.scss',
        'src/styles/mixins.scss',
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
