import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  order_id: {
    // Reference order from Order Management
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  error_type: {
    type: String,
  },
  error_description: {
    type: String,
  },
  job_type: {
    //Warranty or Repair
    type: Number,
  },
});

const Job = mongoose.model("Job", JobSchema);

export default Job;
