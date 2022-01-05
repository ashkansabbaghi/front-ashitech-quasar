"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUser = exports.setEmptyError = exports.setError = exports.removeToken = exports.setToken = void 0;

// export function someMutation( /* state */ ) {}
var setToken = function setToken(state, token) {
  console.log(token);
  localStorage.setItem('token', token);
  state.token = token;
  state.isToken = true;
};

exports.setToken = setToken;

var removeToken = function removeToken(state) {
  localStorage.removeItem('token');
  localStorage.removeItem('vuex');
  state.token = '';
  state.isToken = false;
};

exports.removeToken = removeToken;

var setError = function setError(state, error) {
  localStorage.removeItem("token");

  for (var e in error.response.data.non_field_errors) {
    var i = "".concat(error.response.data.non_field_errors[e]);
    state.errors.push(i);
  }
};

exports.setError = setError;

var setEmptyError = function setEmptyError(state) {
  state.errors = [];
};

exports.setEmptyError = setEmptyError;

var setUser = function setUser(state, user) {
  console.log(user);
  localStorage.setItem('user', user);
  state.user = user;
};

exports.setUser = setUser;