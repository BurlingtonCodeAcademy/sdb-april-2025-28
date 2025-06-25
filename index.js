// import express
const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

// instantiate an instance of express
const app = express()

// declare a port
const PORT = 8080

// body parser middlware
app.use(bodyParser.json())

// cookie parser middlware
app.use(cookieParser())

// using cookie parser middleware endpoint
app.get("/cookies", (req, res) => {
    console.log("Cookies: ", req.cookies)
    res.cookie("cart", ["milk", "carrots", "pet food"])
    res.cookie("darkMode", true)
    res.send("cart cookie set")
})

// health endpoint
app.get("/health", (req, res) => {
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