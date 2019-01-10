/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const glob = require('glob');
const path = require('path');

/**
 * Get all routes, recursively with glob
 * except index.js
 * @param {Express app} app
 * */
function getRoutes(app) {
  glob.sync('./routes/**/*.js').forEach(file => {
    if (!file.includes('index.js')) {
      require(path.resolve(file))(app);
    }
  });
}

module.exports = getRoutes;
