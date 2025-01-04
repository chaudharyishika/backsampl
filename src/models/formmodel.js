import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phoneNumber: { type: String },
  enquiryText: { type: String },
  selectedPackage: { type: String },
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

export default Form;

