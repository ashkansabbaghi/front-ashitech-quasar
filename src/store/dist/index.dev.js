"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _wrappers = require("quasar/wrappers");

var _vuex = require("vuex");

var _vuexPersistedstate = _interopRequireDefault(require("vuex-persistedstate"));

var _storeLogin = _interopRequireDefault(require("./store-login"));

var _auth = _interopRequireDefault(require("./auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
var _default = (0, _wrappers.store)(function ()
/* { ssrContext } */
{
  var Store = (0, _vuex.createStore)({
    modules: {
      login: _storeLogin["default"],
      auth: _auth["default"]
    },
    plugins: [(0, _vuexPersistedstate["default"])()],
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  });
  return Store;
});

exports["default"] = _default;