import mongoose, { Schema } from "mongoose";

const MailSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Por favor ingrese su nombre'],
  },
  email: {
    type: String,
    required: [true, 'Por favor ingrese su email'],
  },
  phone: {
    type: Number,
    required: [true, 'Por favor ingrese su número telefónico'],
  },
  message: {
    type: String,
    required: [true, 'Por favor ingrese su mensajes'],
  }
});

export default mongoose.models.Mail || mongoose.model('Mail', MailSchema)