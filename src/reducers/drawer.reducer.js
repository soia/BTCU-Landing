import { DRAWER_CONSTANTS } from '../constants';

const drawer = (state, action) => {
    if (state === undefined) {
        return {
            isOpen: false,
        };
    }

    switch (action.type) {
    case DRAWER_CONSTANTS.OPEN_MENU:
        return {
            isOpen: true,
        };

    case DRAWER_CONSTANTS.CLOSE:
        return {
            isOpen: false,
        };

    default:
        return state;
    }
};

export default drawer;
