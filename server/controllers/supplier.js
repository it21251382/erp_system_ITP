import Supplier from "../models/supplier.js";
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";

const getAllSupplier = asyncWrapper(async (req, res) => {
  const supplier = await Supplier.find({});
  res.status(200).json({ supplier });
});

const createSupplier = asyncWrapper(async (req, res) => {
  const supplier = await Supplier.create(req.body);
  res.status(201).json({ supplier });
});

