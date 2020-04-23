import { SIGN_OUT, SIGN_IN } from '../Types'
const INITIAL_STATE = {
  isSignedIn: false,
  userId: null,
  name: null,
  email: null,
  photoUrl: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload.id, 
                  name: action.payload.name, email: action.payload.email,
                  photoUrl: action.payload.photoUrl  }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, name: null, email: null,
                  photoUrl: null }
    default:
      return state;
  } 
};