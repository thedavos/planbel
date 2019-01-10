function userPage(app) {
  app.get('/profile/:user', (req, res) => {
    res.send(`Perfil de ${req.params.user}`);
  });
}

module.exports = userPage;
