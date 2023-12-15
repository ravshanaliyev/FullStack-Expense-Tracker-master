const express = require("express")
const cors = require("cors")
const db = require("./db/db")
const {readdirSync} = require("fs")

const app = express()
require("dotenv").config()

const PORT  = process.env.PORT 
// middleware
app.use(express.json())
app.use(
  cors({
    origin: ["https://full-stack-expense-tracker-master-zhab.vercel.app/"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);


// routes

readdirSync("./routes").map((route) => app.use("/api/v1", require("./routes/" + route)))


app.get("/", (req, res) => {
    res.send("Hello World")
    res.json("H")
})
const server = () => {
    // server
    db()
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}

server()