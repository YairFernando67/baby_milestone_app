import {
  FETCH_STAND_UP_MILESTONE,
  EDIT_STAND_UP_MILESTONE,
  FINISHED_ASSESSTMENT_STAND_UP,
  UPDATE_ANSWERS_STAND_UP,
  UPDATE_NUM_MIL_STAND_UP
} from '../Types'

const INITIALSTATE = {
  finished_assesstment: false,
  answers: {
    completed: 0,
    uncompleted: 0
  },
  numMil: null
}

export default (state = INITIALSTATE, action) => {
  let newState = { ...state }
  switch (action.type) {
    case FETCH_STAND_UP_MILESTONE:
      return {...state, main_info: action.payload.main_info, milestones: action.payload.milestones }
    case EDIT_STAND_UP_MILESTONE:
      newState.milestones = action.payload.milestones
      newState.answers = action.payload.answers
      return {...newState}
    case FINISHED_ASSESSTMENT_STAND_UP:
      newState.finished_assesstment = action.payload
      return { ...newState }
    case UPDATE_ANSWERS_STAND_UP:
      newState.answers = action.payload
      return {...newState}
    case UPDATE_NUM_MIL_STAND_UP:
      newState.numMil = action.payload
      return { ...newState }
    default:
      return state;
  }
}