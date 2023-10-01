import Supplier from "../../../server/models/supplier.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const supplier = await Supplier.find({});
      console.log("Supplier data:", supplier); // Add this line for debugging
      res.status(200).json(supplier);
    } catch (error) {
      console.error("Error fetching suppliers:", error); // Add this line for debugging
      res.status(500).json({ error: "Internal Server Error!" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
