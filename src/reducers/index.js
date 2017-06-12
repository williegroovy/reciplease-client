import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer
});

export default rootReducer;