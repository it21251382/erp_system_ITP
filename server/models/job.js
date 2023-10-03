import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  // order_id: {
  //   // Reference order from Order Management
  // },
  cus_name: {
    type: String,
  },
  cus_phone: {
    type: String,
  },
  device: {
    type: String,
  },
  // created_at: {
  //   type: Date,
  //   default: Date.now,
  // },
  error_type: {
    type: String,
  },
  error_description: {
    type: String,
  },
  job_type: {
    //Warranty or Repair
    type: String,
  },
});

const Job = mongoose.model("Job", JobSchema);

export default Job;
