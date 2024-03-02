const express = require("express")
const router = express.Router()
const controller = require("../controllers/login-logout-home")
router.post("/login",controller.login)
router.post("/signup",controller.signup)
router.post("/home",controller.home)
module.exports = router