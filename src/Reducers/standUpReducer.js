import {
  FETCH_STAND_UP_MILESTONE,
  EDIT_STAND_UP_MILESTONE
} from '../Types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STAND_UP_MILESTONE:
      return action.payload;
    case EDIT_STAND_UP_MILESTONE:
      localStorage.stand_up = JSON.stringify(action.payload);
      return {...state, milestones: action.payload}
    default:
      return state;
  }
}