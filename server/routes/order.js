import express from "express";
const orderRouter = express.Router();

import { getAllOrder, createOrder } from "../controllers/order.js";

orderRouter.route("/").get(getAllOrder).post(createOrder);

export { orderRouter, createOrder };
