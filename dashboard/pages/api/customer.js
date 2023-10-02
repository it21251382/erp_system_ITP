import Customer from "../../../server/models/customer.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const customer = await Customer.find({});
      console.log("Customer data:", customer);
      res.status(200).json(customer);
    } catch (error) {
      console.error("Error fetching customer data:", error);
      res.status(500).json({ error: "Internal Server Error!" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
