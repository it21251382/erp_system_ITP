import express from "express";
const customerRouter = express.Router();

import { getAllCustomer, createCustomer } from "../controllers/customer.js";

customerRouter.route("/").get(getAllCustomer).post(createCustomer);

export { customerRouter };
