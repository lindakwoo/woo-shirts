"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Idea = _interopRequireDefault(require("../models/Idea.js"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { protectRoute, admin } from "../middleware/authMiddleware.js";
// import User from '../models/User.js';
var ideaRoutes = _express["default"].Router();

var getIdeas = function getIdeas(req, res) {
  var page, perPage, ideas, totalPages, startIndex, endIndex, paginatedIdeas;
  return regeneratorRuntime.async(function getIdeas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("inside the route");
          page = parseInt(req.params.page); // 1, 2 or 3

          perPage = parseInt(req.params.perPage); // 10

          _context.next = 5;
          return regeneratorRuntime.awrap(_Idea["default"].find({}));

        case 5:
          ideas = _context.sent;

          if (page && perPage) {
            totalPages = Math.ceil(ideas.length / perPage);
            startIndex = (page - 1) * perPage;
            endIndex = startIndex + perPage;
            paginatedIdeas = ideas.slice(startIndex, endIndex);
            res.json({
              ideas: paginatedIdeas,
              pagination: {
                currentPage: page,
                totalPages: totalPages
              }
            });
          } else {
            res.json({
              ideas: ideas,
              pagination: {}
            });
          }

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getIdea = function getIdea(req, res) {
  var idea;
  return regeneratorRuntime.async(function getIdea$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_Idea["default"].findById(req.params.id));

        case 2:
          idea = _context2.sent;

          if (!idea) {
            _context2.next = 7;
            break;
          }

          res.json(idea);
          _context2.next = 9;
          break;

        case 7:
          res.status(404).send("Idea not found");
          throw new Error('Idea not found');

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var createIdeaReview = (0, _expressAsyncHandler["default"])(function _callee(req, res) {
  var _req$body, rating, comment, name, title, product, review;

  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, rating = _req$body.rating, comment = _req$body.comment, name = _req$body.name, title = _req$body.title;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Idea["default"].findById(req.params.id));

        case 3:
          product = _context3.sent;

          if (!idea) {
            _context3.next = 12;
            break;
          }

          // const alreadyReviewed = product.reviews.find((review) => review.user.toString() === user._id.toString());
          // if (alreadyReviewed) {
          // 	res.status(400).send("Product already reviewed");
          // 	throw new Error('Product already reviewed.');
          // }
          review = {
            name: name,
            rating: Number(rating),
            comment: comment
          };
          idea.reviews.push(review);
          _context3.next = 9;
          return regeneratorRuntime.awrap(idea.save());

        case 9:
          res.status(201).json({
            message: 'Review has been saved.'
          });
          _context3.next = 14;
          break;

        case 12:
          res.status(404).send("Idea not found");
          throw new Error('Idea not found.');

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // const createNewProduct = asyncHandler(async (req, res) => {
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
ideaRoutes.route('/reviews/:id').post(createIdeaReview); // productRoutes.route('/:id').delete(deleteProduct);
// productRoutes.route('/').put(updateProduct);
// productRoutes.route('/:productId/:reviewId').put(removeProductReview);
// productRoutes.route('/').post(createNewProduct);

var _default = ideaRoutes;
exports["default"] = _default;