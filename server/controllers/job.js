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

const getJob = asyncWrapper(async (req, res, next) => {
  const { id: jobID } = req.params;
  const job = await Job.findOne({ _id: jobID });
  if (!job) {
    return next(createCustomError(`No job with id: ${jobID}`, 404));
  }
  res.status(200).json({ job });
});

const updateJob = asyncWrapper(async (req, res, next) => {
  const { id: jobID } = req.params;
  const job = await Job.findOneAndUpdate({ _id: jobID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!job) {
    return next(createCustomError(`No job with id : ${jobID}`, 404));
  }

  res.status(200).json({ job });
});

const deleteJob = asyncWrapper(async (req, res) => {
  const { id: jobID } = req.params;
  const job = await Job.findOneAndDelete({ _id: jobID });
  if (!job) {
    return next(createCustomError(`No job with Number : ${jobID}`, 404));
  }
  res.status(200).json({ job });
});

export { getAllJob, createJob, getJob, updateJob, deleteJob };
