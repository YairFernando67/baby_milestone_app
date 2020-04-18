import { SET_AREA_COLOR, TOGGLE_AREA_COLOR } from '../Types'

const INITIALSTATE = {
  area_color: false
}

export default (state = INITIALSTATE, action) => {
  switch(action.type) {
    case SET_AREA_COLOR:
      let newState = {...state};
      newState.area_color = action.payload
      return { ...newState };
    case TOGGLE_AREA_COLOR:
      let nState = {...state};
      nState.area_color = !nState.area_color
      return { ...nState };
    default:
      return state;
  }
}