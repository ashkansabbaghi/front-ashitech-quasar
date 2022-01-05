// export function someMutation( /* state */ ) {}

export const setToken = (state, token) => {
  console.log(token)
  localStorage.setItem('token', token)
  state.token = token
  state.isToken = true
}
export const removeToken = (state) => {
  localStorage.removeItem('token')
  localStorage.removeItem('vuex')
  state.token = ''
  state.isToken = false
}
export const setError = (state, error) => {
  localStorage.removeItem("token");
  for (const e in error.response.data.non_field_errors) {
    const i = `${error.response.data.non_field_errors[e]}`;
    state.errors.push(i);
  }
}
export const setEmptyError = (state) => {
  state.errors = []
}
export const setUser = (state, user) => {
  console.log(user)
  localStorage.setItem('user', user)
  state.user = user
}
