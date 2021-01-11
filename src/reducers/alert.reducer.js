/* eslint-disable */

export function alert(state = {}, action) {
    switch (action.type) {
        case 'SUCCESS':
            return {
                type: 'alert-success',
                message: action.message,
                error: false,
            };
        case 'ERROR':
            return {
                type: 'alert-danger',
                message: action.message,
                error: true,
            };
        case 'CLEAR':
            return {};
        default:
            return state;
    }
}
