import express from "express";
const orderRouter = express.Router();

import {
  getAllOrder,
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.js";

orderRouter.route("/").get(getAllOrder).post(createOrder);
orderRouter.route("/:id").get(getOrder).patch(updateOrder).delete(deleteOrder);

export { orderRouter };
