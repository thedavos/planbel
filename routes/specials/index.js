function pageNotFound(app) {
  app.get('*', (req, res) => {
    res.send('Page not Found');
  });
}

module.exports = pageNotFound;
