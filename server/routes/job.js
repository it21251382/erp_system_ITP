import express from "express";
const jobRouter = express.Router();

import { getAllJob, createJob } from "../controllers/job.js";

jobRouter.route("/").get(getAllJob).post(createJob);

export { jobRouter };
