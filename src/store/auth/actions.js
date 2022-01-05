import {
  api
} from 'boot/axios'

let URL_login = "login/"
let URL_logOut = "logout/"

export const loginSubmit = async ({
  commit
}, user) => {

  api.defaults.headers.common["Authorization"] = "";
  localStorage.removeItem("token");
  // axios

  await api.post(URL_login, {
      username: user.username,
      password: user.password,
    })
    .then((response) => {
      if (response.data.token) {

        commit("setToken", response.data.token);
        commit("setUser", response.data.user);
        api.defaults.headers.common.Authorization = "Bearer " + response.data.token

      }
    });
}


export const LogoutSubmit = async ({
  commit
}, token) => {
  await api.post(URL_logOut, {}, {
    headers: {
      'Authorization': `token ${token}`
    }
  }).then(response => {
    commit("removeToken")
  })
}
