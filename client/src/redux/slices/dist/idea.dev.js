"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ideaSelector = exports["default"] = exports.resetError = exports.setPagination = exports.setIdea = exports.setIdeas = exports.setError = exports.setLoading = exports.ideasSlice = exports.initialState = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  loading: false,
  error: null,
  ideas: [],
  idea: null,
  pagination: {}
};
exports.initialState = initialState;
var ideasSlice = (0, _toolkit.createSlice)({
  name: "ideas",
  initialState: initialState,
  reducers: {
    setLoading: function setLoading(state) {
      state.loading = true;
    },
    setIdeas: function setIdeas(state, _ref) {
      var payload = _ref.payload;
      state.loading = false;
      state.error = null;
      state.ideas = payload;
    },
    setIdea: function setIdea(state, _ref2) {
      var payload = _ref2.payload;
      state.idea = payload;
      state.loading = false;
      state.error = null;
    },
    setError: function setError(state, _ref3) {
      var payload = _ref3.payload;
      state.loading = false;
      state.error = payload;
    },
    setPagination: function setPagination(state, _ref4) {
      var payload = _ref4.payload;
      state.loading = false;
      state.error = null;
      state.pagination = payload;
    },
    resetError: function resetError(state) {
      state.error = null;
      state.reviewed = false;
      state.ideaUpdate = false;
    }
  }
});
exports.ideasSlice = ideasSlice;
var _ideasSlice$actions = ideasSlice.actions,
    setLoading = _ideasSlice$actions.setLoading,
    setError = _ideasSlice$actions.setError,
    setIdeas = _ideasSlice$actions.setIdeas,
    setIdea = _ideasSlice$actions.setIdea,
    setPagination = _ideasSlice$actions.setPagination,
    resetError = _ideasSlice$actions.resetError;
exports.resetError = resetError;
exports.setPagination = setPagination;
exports.setIdea = setIdea;
exports.setIdeas = setIdeas;
exports.setError = setError;
exports.setLoading = setLoading;
var _default = ideasSlice.reducer;
exports["default"] = _default;

var ideaSelector = function ideaSelector(state) {
  return state.ideas;
};

exports.ideaSelector = ideaSelector;