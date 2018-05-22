/**
 *  This is the entry point for our Node Express server for OpenForge.io 
 *  Since Stencil is simply providing web components, we need a way to serve these to our Heroku instance.
 *  In Package.json, we include a heroku-postbuild script that runs our express server; and our express server
 *  serves the static files that are built by npm build.
 */

const express = require('express');
const stencil = require('@stencil/core/server');

// create the express app
const app = express();

// load the stencil config and
// express serve-side rendering middleware
const { wwwDir, logger } = stencil.initApp({
  app: app,
  configPath: __dirname
});

// serve static files
app.use(express.static(wwwDir));

// set which port express it will be listening on
const PORT = process.env.PORT || 3000; //heroku assigns port for you, or on local default to 3000

// start listening and handling requests
app.listen(PORT, () => logger.info(`server-side rendering listening on port: ${ PORT }`));

/**
 * For future usage of cookies; we will use security settings as defined here
 * https://expressjs.com/en/advanced/best-practice-security.html
 */
