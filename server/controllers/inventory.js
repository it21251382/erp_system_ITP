import Inventory from "../models/inventory.js";
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";

const getAllInventory = asyncWrapper(async (req, res) => {
  const inventory = await Inventory.find({});
  res.status(200).json({ inventory });
});

const createInventory = asyncWrapper(async (req, res) => {
  const inventory = await Inventory.create(req.body);
  res.status(201).json({ inventory });
});

const getInventory = asyncWrapper(async (req, res, next) => {
  const { id: inventoryID } = req.params;
  const inventory = await Inventory.findOne({ sku: inventoryID });
  if (!inventory) {
    return next(
      createCustomError(`No inventory item with SKU: ${inventoryID}`, 404)
    );
  }
  res.status(200).json({ inventory });
});

const updateInventory = asyncWrapper(async (req, res, next) => {
  const { id: inventoryID } = req.params;
  const inventory = await Inventory.findOneAndUpdate(
    { sku: inventoryID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!inventory) {
    return next(
      createCustomError(`No inventory item with SKU : ${inventoryID}`, 404)
    );
  }

  res.status(200).json({ inventory });
});

const deleteInventory = asyncWrapper(async (req, res) => {
  const { id: inventoryID } = req.params;
  const inventory = await Inventory.findOneAndDelete({ sku: inventoryID });
  if (!inventory) {
    return next(createCustomError(`No inventory item with SKU : ${inventoryID}`, 404));
  }
  res.status(200).json({ inventory });
});

export { getAllInventory, createInventory, getInventory, updateInventory, deleteInventory };
