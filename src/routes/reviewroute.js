import express from 'express';
import { protect } from "../middleware/auth.js";
import { Review } from "../models/reviewmodel.js";
// Ensure correct path

const router = express.Router();

// Create a review
router.post("/", protect, async (req, res) => {
  try {
    const { content, rating } = req.body;

    console.log("Request Body:", req.body);

    if (!content || !rating) {
      console.log("Missing content or rating");
      return res.status(400).json({ success: false, message: "Content and rating are required" });
    }

    const review = await Review.create({
      user: req.user._id,
      content,
      rating,
    });

    console.log("Review created successfully:", review);

    res.status(201).json({ success: true, review });
  } catch (error) {
    console.error("Error creating review:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
router.get('/reviews', async (req, res) => {
  try {
    // Fetch all reviews, populating the user field with user details
    const reviews = await Review.find().populate('user', 'name email'); // Populate only `name` and `email` fields of the user

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

export default router; 
