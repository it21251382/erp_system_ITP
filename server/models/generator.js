import { Schema, model } from 'mongoose';

const generatorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  currentLetter: {
    type: Number,
    required: true,
  },
  currentNumber: {
    type: Number,
    required: true,
  },
});

const generatorModel = model('Generator', generatorSchema);

export default generatorModel;