import mongoose, { Schema } from "mongoose";

const VideoSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  videoURL: {
    type: String,
  },
  public_id: {
    type: String,
  },
});

export default mongoose.models.Video || mongoose.model('Video', VideoSchema)