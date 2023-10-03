import Order from "../../../server/models/order.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const order = await Order.find({});
      console.log("Order data:", order);
      res.status(200).json(order);
    } catch (error) {
      console.error("Error fetching inventory data:", error);
      res.status(500).json({ error: "Internal Server Error!" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
