// NPM Packages
import express from "express";
import "dotenv/config"


// Configs
const app = express();


app.get("/", (req, res) => {
    res.send("Hello, There!")
})

const port = process.env.PORT || 9000

const start = async() => {
    try {
        app.listen(port, console.log(`Server is listening on port: ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start();



