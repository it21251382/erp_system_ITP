// NPM Packages
import express from "express";
import "dotenv/config";

// File Routes
import { connection } from "./database/connection.js";
import { inventoryRouter } from "./routes/inventory.js";

// Configs
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>ERP API</h1> <a href='/api/v1/inventory'>Inventory route</a>");
});

// API Routes
app.use('/api/v1/inventory', inventoryRouter)


const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await connection(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port: ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
