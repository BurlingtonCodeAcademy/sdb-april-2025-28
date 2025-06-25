// import express
const express = require("express")
const bodyParser = require("body-parser")

// instantiate an instance of express
const app = express()

// declare a port
const PORT = 8080

// body parser middlware
app.use(bodyParser.json())

// health endpoint
app.get("/", (req, res) => {
    console.log("thanks for checking")
    res.send("healthy! thanks for checking")
})

// POST - / - returns the message that was sent
app.post("/", (req, res) => {
    const { message } = req.body;
    res.send(message)
})

// listening for connections
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})