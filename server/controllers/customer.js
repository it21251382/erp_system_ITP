import Customer from "../models/customer.js";
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error";

const getAllCustomer = asyncWrapper(async (req, res) => {
  const customer = await Customer.find({});
  res.status(200).json({ customer });
});

const createCustomer = asyncWrapper(async (req, res) => {
  const customer = await Customer.create(req.body);
  res.status(201).json({ customer });
});

export { getAllCustomer, createCustomer };
