import { IAction, alertActions } from './'
import { authConstants } from '../_constants'
import { authService } from '../_services'

interface IUser {
  bio: string,
  exp: number,
  full_name: string,
  iat: number,
  id: string,
  is_business: boolean,
  profile_picture: string,
  token: string,
  username: string,
  website: string
}

function signIn(token: string, history: any) {

  return async (dispatch: (action: IAction) => void) => {
    try {
      dispatch(request())

      let user = await authService.signIn(token)

      dispatch(success(user))
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      history.push('/')
    } catch (err) {
      dispatch(failure())
      dispatch(alertActions.error(err.message))
    }
  }

  function request():IAction { return { type: authConstants.LOGIN_REQUEST } }
  function success(user: IUser):IAction { return { type: authConstants.LOGIN_SUCCESS, user } }
  function failure():IAction { return { type: authConstants.LOGIN_FAILURE } }
}

function signOut(history: any):IAction {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  history.push('/welcome')
  return { type: authConstants.LOGOUT }
}

export const authActions = {
  signIn,
  signOut,
}
