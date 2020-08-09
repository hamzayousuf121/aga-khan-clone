import rootReducer from './reducer';
import {createStore} from 'redux';
// import thunk from 'redux-thunk';

const store = createStore(rootReducer);

export default store;