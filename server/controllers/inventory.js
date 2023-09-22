import Inventory from "../models/inventory.js"

const getAllInventory = async (req, res) => {
  const inventory = await Inventory.find({})
  res.status(200).json({ inventory });
};

const getAllInventoryTest = async (req, res) => {
  res.status(200).json({ msg: "Get All Inventory Test Route" });
};

export { getAllInventory, getAllInventoryTest };
