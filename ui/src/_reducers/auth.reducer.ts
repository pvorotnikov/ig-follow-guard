import { authConstants } from '../_constants'
import { AnyAction } from 'redux';

interface IState {
  loading: boolean,
  user: any
}

let user: any = JSON.parse(localStorage.getItem('user') || 'null')
const initialState: IState = user
  ? { loading: false, user }
  : { loading: false, user: null }

export default function reducer(state: IState = initialState, action: AnyAction): IState {

  switch (action.type) {

    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        user: null,
        loading: true,
      }

    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
      }

    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
      }

    case authConstants.LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      }

    default:
      return state

  }
}
