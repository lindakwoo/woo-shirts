import express from "express";
import Idea from "../models/Idea.js";
// import { protectRoute, admin } from "../middleware/authMiddleware.js";
import asyncHandler from 'express-async-handler';
// import User from '../models/User.js';

const ideaRoutes = express.Router();

const getIdeas = async (req, res) => {
    console.log("inside the route")
  const page = parseInt(req.params.page); // 1, 2 or 3
  const perPage = parseInt(req.params.perPage); // 10
  const ideas = await Idea.find({});

  if (page && perPage) {
    const totalPages = Math.ceil(ideas.length / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedIdeas = ideas.slice(startIndex, endIndex);
    res.json({ ideas: paginatedIdeas, pagination: { currentPage: page, totalPages } });
  } else {
    res.json({ ideas, pagination: {} });
  }
};

const getIdea = async (req, res) => {
	const idea = await Idea.findById(req.params.id);

	if (idea) {
		res.json(idea);
	} else {
		res.status(404).send("Idea not found");
		throw new Error('Idea not found');
	}
};

const createIdeaReview = asyncHandler(async (req, res) => {
	const { rating, comment, name, title } = req.body;

	const product = await Idea.findById(req.params.id);

	if (idea) {
		// const alreadyReviewed = product.reviews.find((review) => review.user.toString() === user._id.toString());

		// if (alreadyReviewed) {
		// 	res.status(400).send("Product already reviewed");
		// 	throw new Error('Product already reviewed.');
		// }

		const review = {
			name: name,
			rating: Number(rating),
			comment,
		};

		idea.reviews.push(review);
		await idea.save();
		res.status(201).json({ message: 'Review has been saved.' });
	} else {
		res.status(404).send("Idea not found");
		throw new Error('Idea not found.');
	}
});

// const createNewProduct = asyncHandler(async (req, res) => {
// 	const { brand, name, category, stock, price, images, productIsNew, description, subtitle, stripeId } = req.body;

// 	const newProduct = await Product.create({
// 		brand,
// 		name,
// 		category,
// 		stock,
// 		price,
// 		images: images,
// 		productIsNew,
// 		description,
// 		subtitle,
// 		stripeId,
// 	});
// 	await newProduct.save();

// 	const products = await Product.find({});

// 	if (newProduct) {
// 		res.json(products);
// 	} else {
// 		res.status(404).send("Product could not be uploaded");
// 		throw new Error('Product could not be uploaded.');
// 	}
// });

// const updateProduct = asyncHandler(async (req, res) => {
// 	const { brand, name, category, stock, price, id, productIsNew, description, subtitle, stripeId, imageOne, imageTwo } = req.body;

// 	const product = await Product.findById(id);

// 	if (product) {
// 		product.name = name;
// 		product.price = price;
// 		product.description = description;
// 		product.brand = brand;
// 		product.category = category;
// 		product.stock = stock;
// 		product.productIsNew = productIsNew;
// 		product.subtitle = subtitle;
// 		product.stripeId = stripeId;
// 		product.images=[imageOne, imageTwo]

// 		await product.save();

// 		const products = await Product.find({});

// 		res.json(products);
// 	} else {
// 		res.status(404).send("Product not found");
// 		throw new Error('Product not found.');
// 	}
// });

// const removeProductReview = asyncHandler(async (req, res) => {
// 	const product = await Product.findById(req.params.productId);

// 	const updatedReviews = product.reviews.filter((rev) => rev._id.valueOf() !== req.params.reviewId);

// 	if (product) {
// 		product.reviews = updatedReviews;

// 		product.numberOfReviews = product.reviews.length;

// 		if (product.numberOfReviews > 0) {
// 			product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
// 		} else {
// 			product.rating = 5;
// 		}

// 		await product.save();
// 		const products = await Product.find({});

// 		res.json({ products, pagination: {} });
// 	} else {
// 		res.status(404).send("Product not found");
// 		throw new Error('Product not found.');
// 	}
// });

// const deleteProduct = asyncHandler(async (req, res) => {
// 	const product = await Product.findByIdAndDelete(req.params.id);

// 	if (product) {
// 		res.json(product);
// 	} else {
// 		res.status(404).send("Product not found");
// 		throw new Error('Product not found');
// 	}
// });

ideaRoutes.route('/:page/:perPage').get(getIdeas);
ideaRoutes.route('/').get(getIdeas);
ideaRoutes.route('/:id').get(getIdea);
ideaRoutes.route('/reviews/:id').post(createIdeaReview);
// productRoutes.route('/:id').delete(deleteProduct);
// productRoutes.route('/').put(updateProduct);
// productRoutes.route('/:productId/:reviewId').put(removeProductReview);
// productRoutes.route('/').post(createNewProduct);

export default ideaRoutes;