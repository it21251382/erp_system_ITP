import mongoose from "mongoose";
import SupplierProduct from "../models/supplierProduct.js";
import Inventory from "../models/inventory.js";

const migrateData = async () => {
  try {
    const supplierProducts = await SupplierProduct.find({
      /* Add any conditions to filter products */
    });

    // Loop through each supplier product and create an inventory item
    for (const supplierProduct of supplierProducts) {
      const {
        sup_pro_name,
        sup_pro_description,
        sup_pro_quantity,
        sup_pro_selling,
        sup_pro_warranty,
      } = supplierProduct;

      // Create a new Inventory item using the data from SupplierProduct
      const inventoryItem = new Inventory({
        inv_pro_name: sup_pro_name,
        inv_pro_description: sup_pro_description,
        inv_pro_quantity: sup_pro_quantity,
        inv_pro_selling: sup_pro_selling,
        inv_pro_warranty: sup_pro_warranty,
        // Add other fields as needed
      });

      await inventoryItem.save();
    }

    console.log("Data migration successfull!");

  } catch (error) {
    console.error("Error during migration", error);
  } 
};

migrateData();
