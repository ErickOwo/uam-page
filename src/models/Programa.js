import mongoose, { Schema } from "mongoose";

const ProgramaSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  textContent: {
    type: Array,
  },
  imgURL: {
    type: String,
  },
  public_id: {
    type: String,
  },
});

export default mongoose.models.Programa || mongoose.model('Programa', ProgramaSchema)