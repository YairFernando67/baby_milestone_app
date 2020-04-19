import {
  FETCH_SECURE_ATTACHMENT_MILESTONE,
  EDIT_SECURE_ATTACHMENT_MILESTONE,
  FINISHED_ASSESSTMENT_SECURE_ATTACHMENT,
  UPDATE_ANSWERS_SECURE_ATTACHMENT,
  UPDATE_NUM_MIL_SECURE_ATTACHMENT
} from '../Types';

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
    case FETCH_SECURE_ATTACHMENT_MILESTONE:
      return { ...state, main_info: action.payload.main_info, milestones: action.payload.milestones }
    case EDIT_SECURE_ATTACHMENT_MILESTONE:
      newState.milestones = action.payload.milestones
      newState.answers = action.payload.answers
      return { ...newState }
    case FINISHED_ASSESSTMENT_SECURE_ATTACHMENT:
      newState.finished_assesstment = action.payload
      return { ...newState }
    case UPDATE_ANSWERS_SECURE_ATTACHMENT:
      newState.answers = action.payload
      return { ...newState }
    case UPDATE_NUM_MIL_SECURE_ATTACHMENT:
      newState.numMil = action.payload
      return { ...newState }
    default:
      return state;
  }
}