import axios from 'axios'
const API_URL = 'http://localhost:8080/api/auth/'

const register = (cin, password, username, roles, children, grade, salaire, dateDeRecrutement) => {
  return axios.post(API_URL + 'signup', {
    cin,
    password,
    username,
    children,
    roles,
    grade,
    salaire,
    dateDeRecrutement,
  })
}

const login = (cin, password) => {
  return axios
    .post(API_URL + 'signin', {
      cin,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}
export default AuthService
