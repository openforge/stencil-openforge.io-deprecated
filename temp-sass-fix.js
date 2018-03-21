const sass = require('@stencil/sass');

function escapeCssForJs(style) {
  return style.replace('content: "\\2014 \\00A0"', 'content: "BROKEN"');
}

function createSassPlugin(opts) {
  const sassPlugin = sass(opts);
  const originalTransform = sassPlugin.transform;

  sassPlugin.transform = function(sourceText, fileName, context) {
    const xformed = originalTransform(sourceText, fileName, context);

    if (!xformed) {
      return xformed;
    }

    if (xformed.then) {
      return xformed
        .then(results => {
          results.code = escapeCssForJs(results.code);

          return context.fs.writeFile(results.id, results.code, { inMemoryOnly: true })
            .then(() => results);
        });
    }
  }

  return sassPlugin;
}

module.exports = createSassPlugin;
