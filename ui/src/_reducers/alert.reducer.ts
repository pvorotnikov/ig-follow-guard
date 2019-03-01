import { alertConstants } from '../_constants'
import { AnyAction } from 'redux';

interface IState {
  type?: string,
  message?: string,
}

export default function reducer(state: IState = {}, action: AnyAction): IState {

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
