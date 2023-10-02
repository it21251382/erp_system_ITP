import { asyncWrapper } from "../middleware/async.js";
import Order from "../models/order.js";

const getAllOrder = asyncWrapper(async (req, res) => {
  const order = await Order.find({});
  res.status(200).json({ order });
});

const createOrder = asyncWrapper(async (req, res) => {
  try {
    const { customer, items, total_amount } = req.body;

    const order = new Order({
      customer,
      items,
      total_amount,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { getAllOrder, createOrder };


// 6515dd3b67c824d044dcb847
// 650eff18b00d359c8de5e0ad