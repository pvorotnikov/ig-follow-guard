import { alertConstants } from '../_constants'

export const alertActions = {
    success,
    error,
    warning,
    clear,
}

function success(message) {
    return { type: alertConstants.SUCCESS, message }
}

function error(message) {
    return { type: alertConstants.ERROR, message }
}

function warning(message) {
    return { type: alertConstants.WARNING, message }
}

function clear() {
    return { type: alertConstants.CLEAR }
}
