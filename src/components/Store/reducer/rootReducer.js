import authReduer from './authReducer';
import userReduer from './userReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReduer,
    user: userReduer
})

export default rootReducer;