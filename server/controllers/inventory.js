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

export { getAllInventory, createInventory };
