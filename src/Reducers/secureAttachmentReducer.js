import {
  FETCH_SECURE_ATTACHMENT_MILESTONE,
  EDIT_SECURE_ATTACHMENT_MILESTONE,
  FINISHED_ASSESSTMENT_SECURE_ATTACHMENT
} from '../Types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SECURE_ATTACHMENT_MILESTONE:
      return action.payload;
    case EDIT_SECURE_ATTACHMENT_MILESTONE:
      localStorage.secure_attachment = JSON.stringify(action.payload);
      return {...state, milestones: action.payload}
    case FINISHED_ASSESSTMENT_SECURE_ATTACHMENT:
      return {...state, finished_assesstment: action.payload}
    default:
      return state;
  }
}