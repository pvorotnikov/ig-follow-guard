const hat = require('hat')

export const authService = {
  signIn,
}

async function signIn() {
  return {
    userId: hat(32),
    displayName: 'Jane Doe',
  }
}

