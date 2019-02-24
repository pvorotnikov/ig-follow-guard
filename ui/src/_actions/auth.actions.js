import { alertActions } from './'
import { authConstants } from '../_constants'
import { authService } from '../_services'

export const authActions = {
  signIn,
  signOut,
}

function signIn(history) {

  return async dispatch => {
    try {
      dispatch(request())

      let user = await authService.signIn()

      dispatch(success(user))
      localStorage.setItem('user', JSON.stringify(user))
      history.push('/')
    } catch (err) {
      dispatch(failure())
      dispatch(alertActions.error(err.message))
    }
  }

  function request() { return { type: authConstants.LOGIN_REQUEST } }
  function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
  function failure() { return { type: authConstants.LOGIN_FAILURE } }
}

function signOut(history) {

  localStorage.removeItem('user')
  history.push('/welcome')
  return { type: authConstants.LOGOUT }
}
