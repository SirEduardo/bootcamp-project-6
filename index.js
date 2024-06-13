require("dotenv").config()
const express = require("express")
const { connectDB } = require("./src/config/db")
const characterRouter = require("./src/api/routes/character.routes")
const moviesRouter = require("./src/api/routes/movies.routes")


const app = express()
connectDB()

app.use(express.json())

app.use("/api/v1/characters", characterRouter)
app.use("/api/v1/movies", moviesRouter)


app.use("*", (req, res, next) => {
    const error = new Error("Route not found")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || "Unexpected error")
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})