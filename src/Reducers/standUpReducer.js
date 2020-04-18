import {
  FETCH_STAND_UP_MILESTONE,
  EDIT_STAND_UP_MILESTONE,
  FINISHED_ASSESSTMENT_STAND_UP
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
      // localStorage.stand_up = JSON.stringify(action.payload.milestones);
      let nState = { ...state };
      nState.milestones = action.payload.milestones
      nState.answers = action.payload.answers
      console.log("NEW STATE: ", nState)
      return {...nState}
    case FINISHED_ASSESSTMENT_STAND_UP:
      let newState = {...state};
      newState.finished_assesstment = action.payload
      return { ...newState }
    default:
      return state;
  }
}