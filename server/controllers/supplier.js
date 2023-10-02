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

const getSupplier = asyncWrapper(async (req, res, next) => {
  const { id: supplierID } = req.params;
  const supplier = await Supplier.findOne({ _id: supplierID });
  if (!supplier) {
    return next(
      createCustomError(`No supplier with number: ${supplierID}`, 404)
    );
  }
  res.status(200).json({ supplier });
});

const updateSupplier = asyncWrapper(async (req, res, next) => {
  const { id: supplierID } = req.params;
  const supplier = await Supplier.findOneAndUpdate(
    { _id: supplierID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!supplier) {
    return next(
      createCustomError(`No Supplier with Number : ${supplierID}`, 404)
    );
  }

  res.status(200).json({ supplier });
});

const deleteSupplier = asyncWrapper(async (req, res) => {
  const { id: supplierID } = req.params;
  const supplier = await Supplier.findOneAndDelete({ sup_phone: supplierID });
  if (!supplier) {
    return next(
      createCustomError(`No Supplier with Number : ${supplierID}`, 404)
    );
  }
  res.status(200).json({ supplier });
});

export {
  getAllSupplier,
  createSupplier,
  getSupplier,
  updateSupplier,
  deleteSupplier,
};
