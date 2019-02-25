const axios = require('axios')

export const client = axios.create({
  baseURL: 'https://33ae0fhkbg.execute-api.us-east-1.amazonaws.com/Prod/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json', }
})
