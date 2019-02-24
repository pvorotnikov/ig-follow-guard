import { client } from '../_helpers'

export const authService = {
  signIn,
}

async function signIn(token) {
  let response = await client.get('users/me', {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return response.data.data
}

