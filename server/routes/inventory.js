import express from "express";
const inventoryRouter = express.Router();

import {getAllInventory, getAllInventoryTest} from "../controllers/inventory.js"

inventoryRouter.route("/").get(getAllInventory)
inventoryRouter.route("/test").get(getAllInventoryTest)

export { inventoryRouter }