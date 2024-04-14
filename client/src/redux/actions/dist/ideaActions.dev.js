"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetProductError = exports.createIdeaReview = exports.getIdea = exports.getIdeas = void 0;

var _idea = require("../slices/idea");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getIdeas = function getIdeas(page, favoriteToggle) {
  return function _callee(dispatch) {
    var _ref, data, ideas, pagination;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch((0, _idea.setLoading)());
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/ideas/".concat(page, "/", 10)));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            console.log(data);
            ideas = data.ideas, pagination = data.pagination;
            dispatch((0, _idea.setIdeas)(ideas));
            dispatch((0, _idea.setPagination)(pagination));
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            dispatch((0, _idea.setError)(_context.t0.response && _context.t0.response.data.message ? _context.t0.response.data.message : _context.t0.message ? _context.t0.message : "An unexpected error has occured. Please try again later."));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 12]]);
  };
};

exports.getIdeas = getIdeas;

var getIdea = function getIdea(id) {
  return function _callee2(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch((0, _idea.setLoading)(true));
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/ideas/".concat(id)));

          case 4:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch((0, _idea.setIdea)(data));
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            dispatch((0, _idea.setError)(_context2.t0.response && _context2.t0.response.data.message ? _context2.t0.response.data.message : _context2.t0.message ? _context2.t0.message : 'An expected error has occured. Please try again later.'));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.getIdea = getIdea;

var createIdeaReview = function createIdeaReview(ideaId, comment, rating, userName) {
  return function _callee3(dispatch, getState) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].post("/api/ideas/reviews/".concat(ideaId), {
              comment: comment,
              rating: rating,
              userName: userName
            }));

          case 3:
            _context3.next = 8;
            break;

          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3["catch"](0);
            dispatch((0, _idea.setError)(_context3.t0.response && _context3.t0.response.data.message ? _context3.t0.response.data.message : _context3.t0.message ? _context3.t0.message : 'An expected error has occured. Please try again later.'));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 5]]);
  };
};

exports.createIdeaReview = createIdeaReview;

var resetProductError = function resetProductError() {
  return function _callee4(dispatch) {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch((0, _idea.resetError)());

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    });
  };
};

exports.resetProductError = resetProductError;