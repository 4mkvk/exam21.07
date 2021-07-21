const express = require("express")
const userRouter = require("./routes/userRouter")
const homeRouter = require("./routes/homeRouter")
const loginRouter = require("./routes/loginRouter")
let bodyParser = require("body-parser");

const app = express()

app.set("view engine", "hbs")

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use("/registration", userRouter)
// app.use("/message", messageRouter)
app.use("/", homeRouter)
app.use("/login", loginRouter)

app.listen(8080)    