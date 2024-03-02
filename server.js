const express = require('express')
const configeFileStatic = require("./confige/staticFile")
const configeViewEngine = require("./confige/viewEngine")
const path = require("path")

const app = express()
// Middleware parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configeViewEngine(app,path,__dirname)
configeFileStatic(app,path,__dirname)
const port = 3000

app.get('/home', (req, res) => {
  res.render("home.ejs")
})

app.get('/login', (req, res) => {
    res.render("login.ejs")
})

app.post('/login', (req, res) => {
    res.render("login.ejs")
})

app.get('/signup', (req, res) => {
    res.render("signup.ejs")
})

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
