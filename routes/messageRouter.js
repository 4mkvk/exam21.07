const express = require("express")
const loginController = require("../controllers/loginController")
const messageController = require("../controllers/messageController")

let loginRouter = express.Router()

// homeRouter.get('/chats', homeController.chatUsers)
// homeRouter.post('/sendMessage', homeController.sendMessage)

loginRouter.get('/getMessages', loginController.getId)
loginRouter.get("/", loginController.index)

module.exports = loginRouter