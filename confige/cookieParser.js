const cookieParser = require("cookie-parser")
function configureCookieParser(app){
    app.use(cookieParser())
}
module.exports = configureCookieParser