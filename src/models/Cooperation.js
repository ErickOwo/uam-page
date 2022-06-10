import mongoose, { Schema } from "mongoose";

const CooperationSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  linkcooperation: {
    type: String,
  },
  imgURL: {
    type: String,
  },
  public_id: {
    type: String,
  },
});

export default mongoose.models.Cooperation || mongoose.model('Cooperation', CooperationSchema)
