import express from "express";
const inventoryRouter = express.Router();

import { getAllInventory, createInventory, getInventory, updateInventory, deleteInventory } from "../controllers/inventory.js";

inventoryRouter.route("/").get(getAllInventory).post(createInventory);
inventoryRouter.route("/:id").get(getInventory).patch(updateInventory).delete(deleteInventory);

export { inventoryRouter };
