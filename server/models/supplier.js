import mongoose from "mongoose";

// Schema
const supplierchema = new mongoose.Schema({
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
    type: Number,
    unique: true,
    // required: true,
  },
});

const Supplier = mongoose.model("Supplier", supplierchema);
export default Supplier;
