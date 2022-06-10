import mongoose, { Schema } from "mongoose";

const BaseSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  description: {
    type: String,
  },
  place: {
    type: String
  },
  parrafs: {
    type: Array
  },
  imgURL: {
    type: String,
  },
  public_id: {
    type: String,
  },
});

export default mongoose.models.Base || mongoose.model('Base', BaseSchema)
