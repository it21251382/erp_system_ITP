import mongoose from "mongoose";

// Schema
const SupplierSchema = new mongoose.Schema({
  sup_name: {
    type: String,
    // required: true,
  },
  sup_address: {
    type: String,
    // required: true,
  },
  sup_email: {
    type: String,
    unique: true,
    // required: true,
  },
  sup_password: {
    type: String,
    // required: true,
  },
  sup_phone: {
    type: String,
    unique: true,
    // required: true,
  },
  offeredProductTypes: [
    { type: mongoose.Schema.Types.ObjectId, ref: "SupProd" },
  ],
});

const Supplier = mongoose.model("Supplier", SupplierSchema);
export default Supplier;
