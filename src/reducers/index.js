
import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { currentLocale } from './current-locale.reducer';

const rootReducer = combineReducers({
    alert,
    currentLocale,
});

export default rootReducer;
