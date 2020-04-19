import {
  FETCH_SECURE_ATTACHMENT_MILESTONE,
  EDIT_SECURE_ATTACHMENT_MILESTONE,
  FINISHED_ASSESSTMENT_SECURE_ATTACHMENT,
  UPDATE_ANSWERS_SECURE_ATTACHMENT
} from '../Types';

const INITIALSTATE = {
  finished_assesstment: false,
  answers: 0,
}

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case FETCH_SECURE_ATTACHMENT_MILESTONE:
      return {...state, main_info: action.payload.main_info, milestones: action.payload.milestones }
    case EDIT_SECURE_ATTACHMENT_MILESTONE:
      let nState = { ...state };
      nState.milestones = action.payload.milestones
      nState.answers = action.payload.answers
      return {...nState}
    case FINISHED_ASSESSTMENT_SECURE_ATTACHMENT:
      let newState = {...state};
      newState.finished_assesstment = action.payload
      return { ...newState }
    case UPDATE_ANSWERS_SECURE_ATTACHMENT:
      let s = {...state};
      // console.log("answrs:" , s.answers);
      // console.log("payload: ", action.payload)
      s.answers = action.payload
      return {...s}
    default:
      return state;
  }
}