import {
  FETCH_SECURE_ATTACHMENT_MILESTONE
} from '../Types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SECURE_ATTACHMENT_MILESTONE:
      return action.payload;
    default:
      return state;
  }
}