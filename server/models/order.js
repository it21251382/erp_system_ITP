import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  cus_name: {
    type: String,
  },
  item_sku: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
