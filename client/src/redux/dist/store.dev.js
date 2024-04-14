"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _product = _interopRequireDefault(require("./slices/product"));

var _cart = _interopRequireDefault(require("./slices/cart"));

var _user = _interopRequireDefault(require("./slices/user"));

var _order = _interopRequireDefault(require("./slices/order"));

var _admin = _interopRequireDefault(require("./slices/admin"));

var _idea = _interopRequireDefault(require("./slices/idea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducer = (0, _toolkit.combineReducers)({
  product: _product["default"],
  cart: _cart["default"],
  user: _user["default"],
  order: _order["default"],
  admin: _admin["default"],
  idea: _idea["default"]
});

var _default = (0, _toolkit.configureStore)({
  reducer: reducer
});

exports["default"] = _default;