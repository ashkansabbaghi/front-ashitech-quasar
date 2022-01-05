import {
  api
} from 'boot/axios'

let URL_login = "login/"

const state = {
  // token: "",
  // user: {},
  // isToken: false,
  // errors: [],
  // loading: false,
}
const mutations = {
  // setToken(state, token) {
  //   console.log(token)
  //   localStorage.setItem('token', token)
  //   state.token = token
  //   state.isToken = true
  // },
  // removeToken(state) {
  //   // console.log(token)
  //   localStorage.removeItem('token')
  //   state.token = ''
  //   state.isToken = false
  // },
  // setError(state, error) {
  //   localStorage.removeItem("token");
  //   for (const e in error.response.data.non_field_errors) {
  //     const i = `${error.response.data.non_field_errors[e]}`;
  //     state.errors.push(i);
  //   }
  // },
  // setEmptyError(state) {
  //   state.errors = []
  // },
  // setUser(state, user) {
  //   console.log(user)
  //   localStorage.setItem('user', user)
  //   state.user = user
  // },
}
const actions = {
  // async loginSubmit({
  //   commit,
  //   state
  // }, user) {
  //   // state.loading = true;
  //   // this.errors = [];
  //   api.defaults.headers.common["Authorization"] = "";
  //   localStorage.removeItem("token");

  //   api
  //     .post(URL_login, {
  //       username: user.username,
  //       password: user.password,
  //     })
  //     .then((response) => {
  //       if (response.data.token) {

  //         const token = response.data.token;
  //         const user = response.data.user;

  //         commit("setToken", token);
  //         console.log(token, user);
  //         //save token
  //         // localStorage.setItem("token", response.data.token);
  //         commit("setUser", user);
  //         // loading
  //         // this.loading = false;
  //         // change direction
  //         window.setTimeout(function () {
  //           location.replace("#/dashboard");
  //         }, 300);
  //       }
  //     })
  //     .catch((error) => {
  //       // loading
  //       // state.loading = false;
  //       if (error.response) {

  //       } else if (error.message) {
  //         console.log(error.message);
  //       } else {
  //         console.log(error);
  //       }
  //     });
  // },
}
const getters = {
  // token: (state) => {
  //   return state.token
  // },
  // user: (state) => {
  //   return state.user
  // },
  // isToken: (state) => {
  //   return state.isToken
  // }
}

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters,
}
