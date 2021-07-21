const express = require("express")
const homeController = require("../controllers/homeController")

let homeRouter = express.Router()

homeRouter.get("/", homeController.index)
homeRouter.get('/chats', homeController.chatUsers)
homeRouter.post('/sendMessage', homeController.sendMessage)


module.exports = homeRouter