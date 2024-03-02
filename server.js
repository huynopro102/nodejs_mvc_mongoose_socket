const express = require('express')
const configeFileStatic = require("./confige/staticFile")
const configeViewEngine = require("./confige/viewEngine")
var session = require('express-session')
const path = require("path")
const controller = require("./controllers/login-logout-home")
const app = express()
const cookieParser = require("cookie-parser")
// cookie
app.use(cookieParser())
// Middleware parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// confige 
configeViewEngine(app,path,__dirname)
configeFileStatic(app,path,__dirname)

// express-secsion
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
const port = 3000


// router 
const router = require("./router/login-logout-home")


app.get('/home', (req, res) => {
  res.render("home.ejs")
})
app.get('/login', (req, res) => {
    res.render("login.ejs")
})
app.get('/signup', (req, res) => {
    res.render("signup.ejs")
})

// router 
app.use('/',router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
