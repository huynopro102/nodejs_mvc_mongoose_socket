
function configureBodyParser(app,express) {
  // Middleware parse body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}
module.exports = configureBodyParser;
