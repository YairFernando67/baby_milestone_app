import { combineReducers } from 'redux';
import secureAttachmentReducer from './secureAttachmentReducer';
import standUpReducer from './standUpReducer';
import headerReducer from './headerReducer';
import milestoneCompleted from './milestoneCompletedReducer';

export default combineReducers({
  secure_attachment: secureAttachmentReducer,
  stand_up: standUpReducer,
  header: headerReducer,
  mil_completed: milestoneCompleted
})