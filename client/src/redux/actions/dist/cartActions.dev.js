"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCart = exports.setShipping = exports.removeCartItem = exports.addCartItem = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _cart = require("../slices/cart");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addCartItem = function addCartItem(id, qty, size) {
  return function _callee(dispatch) {
    var _ref, data, itemToAdd;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/products/".concat(id)));

          case 3:
            _ref = _context.sent;
            data = _ref.data;
            itemToAdd = {
              id: data._id,
              name: data.name,
              subtitle: data.subtitle,
              image: data.images[0],
              price: data.price,
              stock: data.stock,
              brand: data.brand,
              size: size,
              qty: qty,
              stripeId: data.stripeId
            };
            dispatch((0, _cart.cartItemAdd)(itemToAdd));
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            dispatch((0, _cart.setError)(_context.t0.response && _context.t0.response.data.message ? _context.t0.response.data.message : _context.t0.message ? _context.t0.message : "An unexpected error has occured. Please try again later."));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.addCartItem = addCartItem;

var removeCartItem = function removeCartItem(id) {
  return function _callee2(dispatch) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch((0, _cart.setLoading)(true));
            dispatch((0, _cart.cartItemRemoval)(id));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.removeCartItem = removeCartItem;

var setShipping = function setShipping(value) {
  return function _callee3(dispatch) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch((0, _cart.setShippingCosts)(value));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.setShipping = setShipping;

var resetCart = function resetCart() {
  return function (dispatch) {
    dispatch((0, _cart.clearCart)());
  };
};

exports.resetCart = resetCart;