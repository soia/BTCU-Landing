
import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { currentLocale } from './current-locale.reducer';
import drawer from './drawer.reducer';

const rootReducer = combineReducers({
    alert,
    currentLocale,
    drawer,
});

export default rootReducer;
