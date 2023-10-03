import Job from "../../../server/models/job.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const job = await Job.find({});
      console.log("Job data:", job);
      res.status(200).json(job);
    } catch (error) {
      console.error("Error fetching job data:", error);
      res.status(500).json({ error: "Internal Server Error!" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
