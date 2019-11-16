import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  modal: modalReducer,
  message: messageReducer,
});
