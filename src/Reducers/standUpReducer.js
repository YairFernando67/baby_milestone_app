import {
  FETCH_STAND_UP_MILESTONE,
  EDIT_STAND_UP_MILESTONE,
  FINISHED_ASSESSTMENT_STAND_UP,
  UPDATE_ANSWERS_STAND_UP
} from '../Types'

const INITIALSTATE = {
  finished_assesstment: false,
  answers: 0,
}

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case FETCH_STAND_UP_MILESTONE:
      return {...state, main_info: action.payload.main_info, milestones: action.payload.milestones }
    case EDIT_STAND_UP_MILESTONE:
      let nState = { ...state };
      nState.milestones = action.payload.milestones
      nState.answers = action.payload.answers
      return {...nState}
    case FINISHED_ASSESSTMENT_STAND_UP:
      let newState = {...state};
      newState.finished_assesstment = action.payload
      return { ...newState }
    case UPDATE_ANSWERS_STAND_UP:
      let s = {...state};
      console.log("answrs:" , s.answers);
      console.log("payload: ", action.payload)
      s.answers = action.payload
      return {...s}
    default:
      return state;
  }
}