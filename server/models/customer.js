import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  cus_first_name: {
    type: String,
  },
  cus_last_name: {
    type: String,
  },
  cus_email: {
    type: String,
  },
  cus_password: {
    type: String,
  },
  cus_phone: {
    type: Number,
  },
  cus_city: {
    type: String,
  },
  cus_zip: {
    type: Number,
  },
  cus_address: {
    type: String,
  },
});

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
