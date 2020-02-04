import {
  FETCH_SECURE_ATTACHMENT_MILESTONE,
  EDIT_SECURE_ATTACHMENT_MILESTONE
} from '../Types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SECURE_ATTACHMENT_MILESTONE:
      return action.payload;
    case EDIT_SECURE_ATTACHMENT_MILESTONE:
      localStorage.secure_attachment = JSON.stringify(action.payload);
      return {...state, milestones: action.payload}
    default:
      return state;
  }
}