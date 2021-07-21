const express = require("express")
const loginController = require("../controllers/loginController")
const homeController = require("../controllers/homeController")

let loginRouter = express.Router()

// homeRouter.get('/chats', homeController.chatUsers)
// homeRouter.post('/sendMessage', homeController.sendMessage)

loginRouter.post('/postUser', loginController.getId)
loginRouter.get("/", loginController.index)

module.exports = loginRouter