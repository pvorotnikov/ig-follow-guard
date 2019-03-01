import axios from 'axios'

export const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:4000',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json', }
})
