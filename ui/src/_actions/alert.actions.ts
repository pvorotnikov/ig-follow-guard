
import { alertConstants } from '../_constants'
import { IAction } from './';

function success(message: string):IAction {
    return { type: alertConstants.SUCCESS, message }
}

function error(message: string):IAction {
    return { type: alertConstants.ERROR, message }
}

function warning(message: string):IAction {
    return { type: alertConstants.WARNING, message }
}

function clear():IAction {
    return { type: alertConstants.CLEAR }
}

export const alertActions = {
  success,
  error,
  warning,
  clear,
}
