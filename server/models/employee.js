import { Schema, model } from 'mongoose';

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  empNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  telephone: {
    type: String,
  },
});

const employeeModel = model('Employee', employeeSchema);
export default employeeModel;
