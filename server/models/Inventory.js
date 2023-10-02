import mongoose from "mongoose";

// Setting schema
const InventorySchema = new mongoose.Schema({
  inv_pro_name: {
    type: String,
    // required: true,
  },
  sku: {
    type: String,
    unique: true,
    // required: true,
  },
  inv_pro_description: {
    type: String,
    // required: true,
  }, 
  inv_pro_cost: {
    type: Number,
    // required: true,
  },
  inv_pro_selling: {
    type: Number,
    // required: true,
  },
  inv_pro_warranty: {
    type: Number,
    // required: true,
  },
  inv_pro_quantity: {
    type: Number,
    // required: true,
  },
  inv_pro_reorder_level: {
    type: Number,
    // required: true,
  },
});

const Inventory = mongoose.model("Inventory", InventorySchema);
export default Inventory;