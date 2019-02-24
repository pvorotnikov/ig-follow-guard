import { authConstants } from '../_constants'

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loading: false, user } : { loading: false, user: null }

/**
 * { user: null, loading: false }
 * @type {Object}
 */
export default function reducer(state = initialState, action) {

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
