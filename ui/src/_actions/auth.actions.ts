import { alertActions } from './'
import { authConstants } from '../_constants'
import { authService } from '../_services'
import { AnyAction, Dispatch, ActionCreator } from 'redux';
import { History } from 'history';

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

const signIn: ActionCreator<any> = (token: string, history: History) => {

  return async (dispatch: Dispatch) => {
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

  function request(): AnyAction { return { type: authConstants.LOGIN_REQUEST } }
  function success(user: IUser): AnyAction { return { type: authConstants.LOGIN_SUCCESS, user } }
  function failure(): AnyAction { return { type: authConstants.LOGIN_FAILURE } }
}

const signOut = (history: History): AnyAction => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  history.push('/welcome')
  return { type: authConstants.LOGOUT }
}

export const authActions = {
  signIn,
  signOut,
}
