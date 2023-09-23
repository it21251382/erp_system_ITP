// NPM Packages
import express from "express";
import "dotenv/config";

// DB Connection
import { connection } from "./database/connection.js";

// Routing files
import { inventoryRouter } from "./routes/inventory.js";
import { orderRouter } from "./routes/order.js";
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";

// Configs
const app = express();

// Middlware
app.use(express.static("./public"));
app.use(express.json());

// Custom error handlers
app.use(notFound);
app.use(errorHandlerMiddleware);

app.get("/", (req, res) => {
  res.send(
    "<h1>ERP API</h1> <a href='/api/v1/inventory'>Inventory route</a> <br> <a href='/api/v1/order'>Order route</a>"
  );
});

// API Routes
app.use("/api/v1/inventory", inventoryRouter);
app.use("/api/v1/order", orderRouter);

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
