"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reviewSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var ideaSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true,
    "default": []
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  reviews: {
    type: [reviewSchema],
    required: true,
    "default": []
  },
  rating: {
    type: Number,
    required: true,
    "default": 5
  },
  numberOfReviews: {
    type: Number,
    "default": 0
  }
}, {
  timestamps: true
});

var Idea = _mongoose["default"].model('Idea', ideaSchema);

var _default = Idea;
exports["default"] = _default;