const bodyParser = require("body-parser")
const express = require("express")
const HookController = require("./src/controller/userController")
const dbConnect = require("./src/config/db")

const app = express()

try {
    dbConnect()
} catch (error) {
    console.log(error, "error while db connection")
}
app.use(bodyParser.json())

app.post('/hook', HookController.makeSubscription)
app.get('/hook', HookController.getUserList)

app.get('/', (req, res) => {
    res.send({
        message: "welcome"
    })
})

app.listen(3000)