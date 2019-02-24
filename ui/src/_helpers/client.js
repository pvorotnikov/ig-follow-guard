const axios = require('axios')

export const client = axios.create({
  baseURL: 'http://127.0.0.1:4000/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json', }
})
