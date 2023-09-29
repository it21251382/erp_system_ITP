import Inventory from "../models/inventory.js";
import SupplierProduct from "../models/supplier.js";
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";

const importInvFromSupPro = asyncWrapper(async (req, res) => {
  // Find all supplier products
  const supplierProducts = await SupplierProduct.find({});

  // Loop through supPro & create invPro
  for (const supplierProduct of supplierProducts) {
    const {
      sup_pro_name,
      sup_pro_description,
      sup_pro_quantity,
      sup_pro_selling,
      sup_pro_warranty,
    } = supplierProduct;

    // Create an inventory item using the supplier product data
    await Inventory.create({
      inv_pro_name: sup_pro_name,
      inv_pro_description: sup_pro_description,
      inv_pro_quantity: sup_pro_quantity,
      inv_pro_selling: sup_pro_selling,
      inv_pro_warranty: sup_pro_warranty,
      // You may need to set other fields as well, such as inv_pro_cost and inv_pro_reorder_level
    });
  }

  res.status(201).json({ message: "Inventort imported successfully" });
});
