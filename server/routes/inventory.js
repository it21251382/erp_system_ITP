import express from "express";
const router = express.Router();

import {getAllInventory, getAllInventoryTest} from "../controllers/inventory"

router.route("/").get(getAllInventory)
router.route("/test").get(getAllInventoryTest)

export { router }