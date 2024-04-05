"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetOrder = exports.setPayment = exports.setAddress = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _order = require("../slices/order");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setAddress = function setAddress(data) {
  return function (dispatch) {
    dispatch((0, _order.setShippingAddress)(data));
  };
};

exports.setAddress = setAddress;

var setPayment = function setPayment() {
  return function _callee(dispatch, getState) {
    var _getState, _getState$cart, cartItems, subtotal, shipping, shippingAddress, userInfo, newOrder, config, _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getState = getState(), _getState$cart = _getState.cart, cartItems = _getState$cart.cartItems, subtotal = _getState$cart.subtotal, shipping = _getState$cart.shipping, shippingAddress = _getState.order.shippingAddress, userInfo = _getState.user.userInfo;
            newOrder = {
              subtotal: subtotal,
              shipping: shipping,
              shippingAddress: shippingAddress,
              cartItems: cartItems,
              userInfo: userInfo
            };
            _context.prev = 2;
            config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            _context.next = 6;
            return regeneratorRuntime.awrap(_axios["default"].post('api/checkout', newOrder, config));

          case 6:
            _ref = _context.sent;
            data = _ref.data;
            window.location.assign(data.url);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            (0, _order.setError)(_context.t0.response && _context.t0.response.data.message ? _context.t0.response.data.message : _context.t0.message ? _context.t0.message : 'An expected error has occured. Please try again later.');

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 11]]);
  };
};

exports.setPayment = setPayment;

var resetOrder = function resetOrder() {
  return function _callee2(dispatch) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch((0, _order.clearOrder)());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.resetOrder = resetOrder;