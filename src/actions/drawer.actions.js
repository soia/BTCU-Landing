import { DRAWER_CONSTANTS } from '../constants';

const openMenu = () => ({
    type: DRAWER_CONSTANTS.OPEN_MENU,
});

const closeMenu = () => ({
    type: DRAWER_CONSTANTS.CLOSE,
});


export {
    openMenu,
    closeMenu,
};
