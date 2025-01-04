import express from 'express';
import Form from '../models/formmodel.js';  // Make sure the model file has a .js extension

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phoneNumber, enquiryText, selectedPackage } = req.body;

  // Validate that all fields are provided
  if (!name || !phoneNumber || !selectedPackage) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // Create a new form submission object
    const newForm = new Form({
      name,
      email,
      phoneNumber,
      enquiryText,
      selectedPackage
    });

    // Save the form data to the database
    await newForm.save();

    // Respond with a success message
    res.status(201).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    // Log the error for debugging
    console.error("Error in form submission:", error);

    // Send a response with an error message
    res.status(500).json({
      success: false,
      message: "Internal server error. Could not save form data.",
      error: error.message, // Optional: Include the error message for debugging
    });
  }
});

export default router;



