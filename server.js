const express = require('express')
const configeFileStatic = require("./confige/staticFile")
const configeViewEngine = require("./confige/viewEngine")
const configeDotEnv = require("./confige/dotenv")
const configureCookieParser = require("./confige/cookieParser")
const configureBodyParser = require("./confige/bodyParser")
const configureSecsion = require("./confige/secsion")
const initSocket = require("./socket")
const path = require("path")
const app = express()
// confige 
configeViewEngine(app,path,__dirname)
configeFileStatic(app,path,__dirname)
configeDotEnv
configureCookieParser(app)
configureBodyParser(app,express)
configureSecsion(app)
// router 
const routerWeb = require("./router/web") 
app.use('/',routerWeb)
// socket
initSocket(app,process.env.PORT) 