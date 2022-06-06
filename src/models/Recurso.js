import mongoose, { Schema } from "mongoose";

const RecursoSchema = new Schema({
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  imgURL: {
    type: String,
  },
  public_id: {
    type: String,
  },
});

export default mongoose.models.Recurso || mongoose.model('Recurso', RecursoSchema)
