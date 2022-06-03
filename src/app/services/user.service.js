import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/user/'
const getPublicContent = () => {
  return axios.get(API_URL + 'all')
}

const getList = () => {
  return axios.get(API_URL + 'getList', {headers: authHeader()})
}
const getListDemandeJs = () => {
  return axios.get(API_URL + 'getDemandeJs', {headers: authHeader()})
}

const getRapport = () => {
  return axios.get(API_URL + 'getRapport', {headers: authHeader()})
}

const getListDemandeRn = () => {
  return axios.get(API_URL + 'ListeDemandeRn', {headers: authHeader()})
}
const getListDemandePret = () => {
  return axios.get(API_URL + 'ListeDemandesPret', {headers: authHeader()})
}

const updateUser = (updatedUser, cin, password) => {
  return axios.post(API_URL + 'updateUser', {updatedUser, cin, password}, {headers: authHeader()})
}
const findDemandeRn = (id) => {
  return axios.post(API_URL + 'findDemandeRn', {id}, {headers: authHeader()})
}

const getUser = (userId) => {
  return axios.post(API_URL + 'getUser', {userId}, {headers: authHeader()})
}
const getUserByCin = (cin) => {
  return axios.post(API_URL + 'getUserByCin', {cin}, {headers: authHeader()})
}
const getDemandePret = (id) => {
  return axios.post(API_URL + 'getDemandePret', {id}, {headers: authHeader()})
}

const deleteUser = (userId) => {
  return axios.post(API_URL + 'deleteUser', {userId}, {headers: authHeader()})
}
const countRows = () => {
  return axios.get(API_URL + 'dashboard', {headers: authHeader()})
}
const getUserBoard = () => {
  return axios.get(API_URL + 'user', {headers: authHeader()})
}
const getModeratorBoard = () => {
  return axios.get(API_URL + 'mod', {headers: authHeader()})
}
const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', {headers: authHeader()})
}
const DemandeRn = (demande, cin, id, username, resultatFile) => {
  return axios
    .post(API_URL + 'DemandeRn', {
      demande,
      cin,
      id,
      username,
      resultatFile,
    })
    .then((response) => {
      response.send({message: response})
    })
}
const upload = async (file) => {
  let formData = new FormData()
  formData.append('file', file)
  return await axios.post(API_URL + 'upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

const DemandeJS = async (demande, cin, id, username, resultatFile) => {
  const response = await axios.post(API_URL + 'DemandeJS', {
    demande,
    cin,
    id,
    username,
    resultatFile,
  })
  response.send({message: response})
}
const DemandePret = async (demande, cin, id, username, sommeD, PartitionP, grade) => {
  const response = await axios.post(API_URL + 'DemandePret', {
    demande,
    cin,
    id,
    username,
    sommeD,
    PartitionP,
    grade,
  })
  response.send({message: response})
}

const Test = () => {
  return axios.get(API_URL + 'Test', {headers: authHeader()})
}
const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getList,
  deleteUser,
  countRows,
  updateUser,
  getUser,
  Test,
  getListDemandeRn,
  getRapport,
  DemandeJS,
  getListDemandeJs,
  upload,
  DemandePret,
  getListDemandePret,
  getDemandePret,
  getUserByCin,
  DemandeRn,
  findDemandeRn,
}
export default UserService
