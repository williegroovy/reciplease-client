import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  modal: modalReducer
});

export default rootReducer;