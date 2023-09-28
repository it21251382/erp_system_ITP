import SupplierProduct from "../models/supplierProduct.js"
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";

const getAllSupplierProduct = asyncWrapper(async (req, res) => {
  const supplierProduct = await SupplierProduct.find({});
  res.status(200).json({ supplierProduct });
});

const createSupplierProduct = asyncWrapper(async (req, res) => {
  const supplierProduct = await SupplierProduct.create(req.body);
  res.status(201).json({ supplierProduct });
});

export { getAllSupplierProduct, createSupplierProduct };
