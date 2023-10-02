import express from "express";
const customerRouter = express.Router();

import { getAllCustomer, createCustomer, getCustomer, updateCustomer, deleteCustomer } from "../controllers/customer.js";

customerRouter.route("/").get(getAllCustomer).post(createCustomer);
customerRouter.route("/:id").get(getCustomer).patch(updateCustomer).delete(deleteCustomer)

export { customerRouter };
