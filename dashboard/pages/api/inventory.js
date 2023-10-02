import Inventory from "../../../server/models/inventory.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const inventory = await Inventory.find({});
      console.log("Inventory data:", inventory);
      res.status(200).json(inventory);
    } catch (error) {
      console.error("Error fetching inventory data:", error);
      res.status(500).json({ error: "Internal Server Error!" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
