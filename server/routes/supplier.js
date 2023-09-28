import express from "express";
const supplierRouter = express.Router();

import { getAllSupplier, createSupplier } from "../controllers/supplier.js";

supplierRouter.route("/").get(getAllSupplier).post(createSupplier);

export { supplierRouter };
