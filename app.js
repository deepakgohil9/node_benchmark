const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const user_route = require("./routes/user")

const PORT = process.env.PORT || 3000

const connect = async () => {
    await mongoose.connect(process.env.MONGO)
    console.log("connected to database!")
}

dotenv.config()
const app = express()

app.use(express.json())
app.use("/user",user_route)

app.get("/", (req, res) => {
    res.send("hello !")
})

app.use((req, res) => {
    if (req.err) {
        res.status(400).send({ error: req.err })
    }
    else {
        res.status(404).send({ error: "not found" })
    }
})

app.listen(PORT, () => {
    connect()
    console.log("server started!")
})