import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './User/reducers';
import focusCardReducer from './FoucsCard/reducers';

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  focusCard: focusCardReducer
});

export default rootReducer;