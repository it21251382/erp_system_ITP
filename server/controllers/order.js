import { asyncWrapper } from "../middleware/async.js";
import Order from "../models/order.js";

const getAllOrder = asyncWrapper(async (req, res) => {
  const order = await Order.find({});
  res.status(200).json({ order });
});

const createOrder = asyncWrapper(async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json({ order });
});

const getOrder = asyncWrapper(async (req, res, next) => {
  const { id: orderID } = req.params;
  const order = await Order.findOne({ _id: orderID });
  if (!order) {
    return next(
      createCustomError(`No order with id: ${orderID}`, 404)
    );
  }
  res.status(200).json({ order });
});

const updateOrder = asyncWrapper(async (req, res, next) => {
  const { id: orderID } = req.params;
  const order = await Order.findOneAndUpdate(
    { _id: orderID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!order) {
    return next(
      createCustomError(`No order with id : ${orderID}`, 404)
    );
  }

  res.status(200).json({ order });
});

const deleteOrder = asyncWrapper(async (req, res) => {
  const { id: orderID } = req.params;
  const order = await Order.findOneAndDelete({ _id: orderID });
  if (!order) {
    return next(createCustomError(`No order with id : ${orderID}`, 404));
  }
  res.status(200).json({ order });
});

export { getAllOrder, createOrder, getOrder, updateOrder, deleteOrder };
