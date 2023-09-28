import express from "express";
const supplierProductRouter = express.Router();

import {
  getAllSupplierProduct,
  createSupplierProduct,
} from "../controllers/supplierProduct.js";

supplierProductRouter
  .route("/")
  .get(getAllSupplierProduct)
  .post(createSupplierProduct);

export { supplierProductRouter };
