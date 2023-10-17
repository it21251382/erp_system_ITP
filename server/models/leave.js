import { Schema, model } from 'mongoose';
import { ObjectId } from 'bson';

const leaveSchema = new Schema({
  employee: {
    type: ObjectId,
    ref: 'Employee',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  isApproved: {
    type: Boolean,
  },
  status: {
    type: String,
    required: true,
  }
});

const leaveModel = model("Leave", leaveSchema);
export default leaveModel;