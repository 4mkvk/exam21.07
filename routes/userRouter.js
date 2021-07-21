const express = require("express")
const userController = require("../controllers/userController")
const homeRouter = require("./homeRouter")

let userRouter = express.Router()

userRouter.get("/", userController.registrateUser);
userRouter.post("/postUser", userController.postUser);

module.exports = userRouter