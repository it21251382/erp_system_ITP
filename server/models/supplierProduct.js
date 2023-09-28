import mongoose from "mongoose";

const SupplierProductSchema = new mongoose.Schema({
  sup_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
    required: true,
  },
  sup_pro_name: {
    type: String,
  },
  sup_pro_description: {
    type: String,
  },
  cat_id: {
    type: Number,
  },
  sup_pro_quantity: {
    type: Number,
  },
  sup_pro_selling: {
    type: Number,
  },
  sup_pro_warranty: {
    type: Number,
  },
});

const SupplierProduct = mongoose.model(
  "SupplierProduct",
  SupplierProductSchema
);
export default SupplierProduct;
