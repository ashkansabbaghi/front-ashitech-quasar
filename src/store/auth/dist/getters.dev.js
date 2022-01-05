"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isToken = exports.user = exports.token = void 0;

// export function someGetter (/* state */) {
// }
var token = function token(state) {
  return state.token;
};

exports.token = token;

var user = function user(state) {
  return state.user;
};

exports.user = user;

var isToken = function isToken(state) {
  return state.isToken;
};

exports.isToken = isToken;