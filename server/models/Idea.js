import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
		title: { type: String, required: true },
	},
	{ timestamps: true }
);

const ideaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: [],
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    reviews: {
      type: [reviewSchema],
      required: true,
      default: [],
    },
    rating: {
      type: Number,
      required: true,
      default: 5,
    },
    numberOfReviews: {
      type: Number,
      default: 0
    },
  },
  { timestamps: true }
);

const Idea = mongoose.model('Idea', ideaSchema);

export default Idea;