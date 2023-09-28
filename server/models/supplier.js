import mongoose from "mongoose";

// Schema
const SupplierSchema = new mongoose.Schema({
    sup_name: {
        type: String,
        // required: true,
    },
    sup_address: {
        type: String,
    },
    sup_email: {
        type: String,
        unique: true,
    },
    sup_password: {
        type: String,
    },
    sup_phone: {
        type: Number,
        unique: true,
    },
});

const Supplier = mongoose.model("Supplier", SupplierSchema);
export default Supplier;
