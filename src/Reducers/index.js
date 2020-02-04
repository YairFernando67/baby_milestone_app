import { combineReducers } from 'redux';
import ss from './secureAttachmentReducer';
import dd from './standUpReducer';

export default combineReducers({
  first: () => 12
})