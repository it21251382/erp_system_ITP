import express from "express";
const inventoryRouter = express.Router();

import { getAllInventory, createInventory } from "../controllers/inventory.js";

inventoryRouter.route("/").get(getAllInventory).post(createInventory);
// inventoryRouter.route("/test").get(createInventory)

export { inventoryRouter };
