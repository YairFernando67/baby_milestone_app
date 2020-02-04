import {
  FETCH_STAND_UP_MILESTONE
} from '../Types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STAND_UP_MILESTONE:
      return action.payload;
    default:
      return state;
  }
}