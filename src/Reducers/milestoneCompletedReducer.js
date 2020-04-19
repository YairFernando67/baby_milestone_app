import { SET_MILESTONE_COMPLETED } from '../Types'

const INITIALSTATE = {
  num: null
}

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case SET_MILESTONE_COMPLETED:
      let nState = { ...state }
      nState.num++
      return { ...nState }   
    default:
      return state;
  }
}