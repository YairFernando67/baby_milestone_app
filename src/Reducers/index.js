import { combineReducers } from 'redux';
import secureAttachmentReducer from './secureAttachmentReducer';
import standUpReducer from './standUpReducer';

export default combineReducers({
  secure_attachment: secureAttachmentReducer,
  stand_up: standUpReducer
})