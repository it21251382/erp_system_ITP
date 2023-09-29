import express from "express";
const jobRoute = express.Router();

import { getAllJob, createJob } from "../controllers/job.js";

jobRoute.route("/").get(getAllJob).post(createJob);

export { jobRoute };
