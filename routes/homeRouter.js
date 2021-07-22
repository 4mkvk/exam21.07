const express = require("express")
const homeController = require("../controllers/homeController")

let homeRouter = express.Router()

homeRouter.get("/", homeController.index);
homeRouter.get('/users', homeController.allUsers);
homeRouter.post('/sendMessage', homeController.sendMessage);
homeRouter.get('/chat', homeController.chatWithUser)

module.exports = homeRouter