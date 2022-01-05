"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _wrappers = require("quasar/wrappers");

var _vueRouter = require("vue-router");

var _routes = _interopRequireDefault(require("./routes"));

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
var _default = (0, _wrappers.route)(function ()
/* { store, ssrContext } */
{
  var createHistory = process.env.SERVER ? _vueRouter.createMemoryHistory : process.env.VUE_ROUTER_MODE === 'history' ? _vueRouter.createWebHistory : _vueRouter.createWebHashHistory;
  var Router = (0, _vueRouter.createRouter)({
    scrollBehavior: function scrollBehavior() {
      return {
        left: 0,
        top: 0
      };
    },
    routes: _routes["default"],
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  }); // Router.beforeEach((to, from, next) => {
  //   if (to.matched.some(record => record.meta.requireAuth) && !store.getters['auth/isSignedIn']) {
  //     next({ name: 'account-signin', query: { next: to.fullPath } })
  //   } else {
  //     next()
  //   }
  // })
  // Router.beforeEach((to, from, next) => {
  //   if (to.matched.some(record => record.meta.requireLogin) && !store.getters['isToken']) {
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // })

  return Router;
});

exports["default"] = _default;