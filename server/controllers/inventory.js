import Inventory from "../models/inventory.js";
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";

const getAllInventory = asyncWrapper(async (req, res) => {
  const inventory = await Inventory.find({});
  res.status(200).json({ inventory });
});

const getAllInventoryTest = asyncWrapper(async (req, res) => {
  res.status(200).json({ msg: "Get All Inventory Test Route" });
});

export { getAllInventory, getAllInventoryTest };
