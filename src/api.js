import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: ' https://last-app-prod.herokuapp.com/',
})

export default api
