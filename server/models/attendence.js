import { Schema, model } from 'mongoose';
import { ObjectId } from 'bson';

const attendenceSchema = new Schema({
  employee: {
    type: ObjectId,
    ref: 'Employee',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const attendenceModel = model("Attendence", attendenceSchema);
export default attendenceModel;