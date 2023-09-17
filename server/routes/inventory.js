import express from "express";
const router = express.Router();
import inventory from "../controllers/inventory"

const getAllInventory  = inventory();


router.route("/").get(getAllInventory);

export default router;
