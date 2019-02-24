import { alertConstants } from '../_constants'

/**
 * { }
 * @type {Object}
 */
export default function reducer(state = {}, action) {

  switch (action.type) {

    case alertConstants.SUCCESS:
      return { type: 'success', message: action.message, }

    case alertConstants.ERROR:
      return { type: 'error', message: action.message, }

    case alertConstants.WARNING:
      return { type: 'warning', message: action.message, }

    case alertConstants.CLEAR:
      return {}

    default:
      return state
  }

}
