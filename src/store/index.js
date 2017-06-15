import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './User/reducers';
import modalReducer from './Modal/reducers';
import recipeReducer from './Recipe/reducers';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  modal: modalReducer,
  recipes: recipeReducer
});

export default rootReducer;