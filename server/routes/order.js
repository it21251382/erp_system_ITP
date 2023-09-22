import express from "express";
const orderRouter = express.Router();

import { getAllOrder } from "../controllers/order.js";

orderRouter.route("/").get(getAllOrder);

export { orderRouter };
