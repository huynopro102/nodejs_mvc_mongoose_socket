var session = require('express-session')
function configureSecsion(app){
    // express-secsion
    app.set('trust proxy', 1) // trust first proxy
    app.use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true }
    }))
}
module.exports = configureSecsion
