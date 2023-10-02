import Customer from "../models/customer.js";
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";

const getAllCustomer = asyncWrapper(async (req, res) => {
  const customer = await Customer.find({});
  res.status(200).json({ customer });
});

const createCustomer = asyncWrapper(async (req, res) => {
  const customer = await Customer.create(req.body);
  res.status(201).json({ customer });
});

const getCustomer = asyncWrapper(async (req, res, next) => {
  const { id: customerID } = req.params;
  const customer = await Customer.findOne({ _id: customerID });
  if (!customer) {
    return next(
      createCustomError(`No customer item with Number: ${customerID}`, 404)
    );
  }
  res.status(200).json({ customer });
});

const updateCustomer = asyncWrapper(async (req, res, next) => {
  const { id: customerID } = req.params;
  const customer = await Customer.findOneAndUpdate(
    { _id: customerID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!customer) {
    return next(
      createCustomError(`No customer item with Number : ${customerID}`, 404)
    );
  }

  res.status(200).json({ customer });
});

const deleteCustomer = asyncWrapper(async (req, res) => {
  const { id: customerID } = req.params;
  const customer = await Customer.findOneAndDelete({ cus_phone: customerID });
  if (!customer) {
    return next(createCustomError(`No customer item with Number : ${customerID}`, 404));
  }
  res.status(200).json({ customer });
});

export { getAllCustomer, createCustomer, getCustomer, updateCustomer, deleteCustomer };
