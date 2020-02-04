import {
  FETCH_STAND_UP_MILESTONE,
  EDIT_STAND_UP_MILESTONE,
  FINISHED_ASSESSTMENT_STAND_UP
} from '../Types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STAND_UP_MILESTONE:
      return action.payload;
    case EDIT_STAND_UP_MILESTONE:
      localStorage.stand_up = JSON.stringify(action.payload);
      return {...state, milestones: action.payload}
    case FINISHED_ASSESSTMENT_STAND_UP:
      return {...state, finished_assesstment: action.payload}
    default:
      return state;
  }
}