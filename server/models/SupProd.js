import mongoose from "mongoose";

const SupProdSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const SupProd = mongoose.model("SupProd", SupProdSchema);

export default SupProd;
