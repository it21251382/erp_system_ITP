import asyncWrapper from "../middleware/async";
import inventory from "../models/inventory";

const getAllInventory = asyncWrapper(async (req, res) => {
  const inventory = await inventory.find({});
  res.status(200).json({ inventory });
});

module.exports = {
  getAllInventory,
};
