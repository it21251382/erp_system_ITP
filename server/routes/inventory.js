import express from "express";
const router = express.Router();

const { getAllInventory } = require("../controllers/inventory");

router.route("/").get(getAllInventory).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
