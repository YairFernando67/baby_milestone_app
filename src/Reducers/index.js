import { combineReducers } from 'redux';
import secureAttachmentReducer from './secureAttachmentReducer';
import standUpReducer from './standUpReducer';
import headerReducer from './headerReducer';
import milestoneCompleted from './milestoneCompletedReducer';
import authReducer from './authReducer';

export default combineReducers({
  secure_attachment: secureAttachmentReducer,
  stand_up: standUpReducer,
  header: headerReducer,
  auth: authReducer,
  mil_completed: milestoneCompleted
})