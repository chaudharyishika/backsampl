import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  enquiryText: { type: String, required: true },
  selectedPackage: { type: String, required: true },
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

export default Form;

