import express from "express";
const router = express.Router();

const { getAllInventory } = require("../controllers/inventory");

router.route("/").get(getAllInventory);

export default router;
