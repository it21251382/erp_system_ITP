import express from "express";
const inventoryRouter = express.Router();

import { getAllInventory, createInventory, getInventory, updateInventory } from "../controllers/inventory.js";

inventoryRouter.route("/").get(getAllInventory).post(createInventory);
inventoryRouter.route("/:id").get(getInventory).patch(updateInventory);
// inventoryRouter.route("/test").get(createInventory)

export { inventoryRouter };
