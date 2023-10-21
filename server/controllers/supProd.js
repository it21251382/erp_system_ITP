import SupProd from "../models/SupProd.js";
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";

const getAllSupProd = asyncWrapper(async (req, res) => {
  const supProd = await SupProd.find({});
  res.status(200).json({ supProd });
});

const createSupProd = asyncWrapper(async (req, res) => {
  const supProd = await SupProd.create(req.body)
  res.status(201).json({supProd})
})

export { getAllSupProd, createSupProd };
