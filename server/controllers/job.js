import Job from "../models/job.js";
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";

const getAllJob = asyncWrapper(async (req, res) => {
  const job = await Job.find({});
  res.status(200).json({ job });
});

const createJob = asyncWrapper(async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json({ job });
});

export { getAllJob, createJob };
