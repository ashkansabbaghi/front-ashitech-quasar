"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutSubmit = exports.loginSubmit = void 0;

var _axios = require("boot/axios");

var URL_login = "login/";
var URL_logOut = "logout/";

var loginSubmit = function loginSubmit(_ref, user) {
  var commit;
  return regeneratorRuntime.async(function loginSubmit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          commit = _ref.commit;
          _axios.api.defaults.headers.common["Authorization"] = "";
          localStorage.removeItem("token"); // axios

          _context.next = 5;
          return regeneratorRuntime.awrap(_axios.api.post(URL_login, {
            username: user.username,
            password: user.password
          }).then(function (response) {
            if (response.data.token) {
              commit("setToken", response.data.token);
              commit("setUser", response.data.user);
              _axios.api.defaults.headers.common.Authorization = "Bearer " + response.data.token;
            }
          }));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.loginSubmit = loginSubmit;

var LogoutSubmit = function LogoutSubmit(_ref2, token) {
  var commit;
  return regeneratorRuntime.async(function LogoutSubmit$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          commit = _ref2.commit;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios.api.post(URL_logOut, {}, {
            headers: {
              'Authorization': "token ".concat(token)
            }
          }).then(function (response) {
            commit("removeToken");
          }));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.LogoutSubmit = LogoutSubmit;