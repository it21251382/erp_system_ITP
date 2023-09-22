const getAllInventory = async (req, res) => {
  res.status(200).json({ msg: "Get All Inventory Route" });
};

const getAllInventoryTest = async (req, res) => {
  res.status(200).json({ msg: "Get All Inventory Test Route" });
};

export { getAllInventory, getAllInventoryTest };
