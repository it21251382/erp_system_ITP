import asyncWrapper from "../middleware/async";
import inventory from "../models/inventory"

const Inventory = inventory();

const getAllInventory = asyncWrapper(async (req, res) => {
  const inventory = await Inventory.find({});
  res.status(200).json({ inventory });
});

module.exports = {
  getAllInventory,
};
