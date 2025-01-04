import mongoose from 'mongoose';


const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  content: {
    type: String,
    required: [true, "Review content is required"]
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: 1,
    max: 5, // Ratings from 1 to 5
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// ES module export
export const Review = mongoose.model('Review',reviewSchema);
