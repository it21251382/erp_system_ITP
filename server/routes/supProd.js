import express from "express";
const supProdRouter = express.Router();

import { getAllSupProd, createSupProd } from "../controllers/supProd.js";

supProdRouter.route("/").get(getAllSupProd).post(createSupProd);

export { supProdRouter, createSupProd };
