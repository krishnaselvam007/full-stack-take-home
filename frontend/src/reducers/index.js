import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appoinments from './appoinments';

export default combineReducers({
  form: formReducer,
  appoinments
});