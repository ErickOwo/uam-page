import mongoose, { Schema } from "mongoose";

const PhotoSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  imgURL: {
    type: String,
  },
  public_id: {
    type: String,
  },
});

export default mongoose.models.Photo || mongoose.model('Photo', PhotoSchema)
