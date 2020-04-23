import kinedu from '../API/kinedu';
import {
  FETCH_SECURE_ATTACHMENT_MILESTONE,
  FETCH_STAND_UP_MILESTONE,
  EDIT_SECURE_ATTACHMENT_MILESTONE,
  EDIT_STAND_UP_MILESTONE,
  FINISHED_ASSESSTMENT_SECURE_ATTACHMENT,
  FINISHED_ASSESSTMENT_STAND_UP,
  SET_AREA_COLOR,
  TOGGLE_AREA_COLOR,
  UPDATE_ANSWERS_SECURE_ATTACHMENT,
  UPDATE_ANSWERS_STAND_UP,
  UPDATE_NUM_MIL_SECURE_ATTACHMENT,
  UPDATE_NUM_MIL_STAND_UP,
  SET_MILESTONE_COMPLETED,
  SIGN_IN,
  SIGN_OUT
} from '../Types'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchSecureAttachmentSkill = () => async (dispatch) => {
  const response = await kinedu.get('/2/milestones');
  const skillTwo = createSkill(response);
  dispatch({
    type: FETCH_SECURE_ATTACHMENT_MILESTONE,
    payload: skillTwo
  })
}

export const fetchStandUpSkill = () => async (dispatch) => {
  const response = await kinedu.get('/23/milestones');
  const skillOne = createSkill(response);
  dispatch({
    type: FETCH_STAND_UP_MILESTONE,
    payload: skillOne
  })
}

export const editAnswerStandUp = (mil, answers) => async (dispatch) => {
  let before = mil.answer;
  
  switch (mil.answer) {
    case 'Not Answer':
      mil.answer = 'Completed'
      break;
    case 'Completed':
      mil.answer = 'Uncompleted'
      break;
    case 'Uncompleted':
      mil.answer = 'Completed'
      break;
    default:
      break;
  }

  if (mil.answer === 'Completed' && before === 'Not Answer') {
    answers.completed++
  } else if (mil.answer === 'Completed') {
    answers.completed++
    answers.uncompleted--
  }
  if (mil.answer === 'Uncompleted' && before === 'Not Answer') {
    answers.uncompleted++
  } else if (mil.answer === 'Uncompleted') {
    answers.completed--
    answers.uncompleted++
  }
 
  let stand_up = JSON.parse(localStorage.getItem('stand_up'));
  stand_up.milestones.map(milestone => {
    if (milestone.id === mil.id) {
      milestone.answer = mil.answer
    }
  })
  stand_up.answers = answers
  localStorage.stand_up = JSON.stringify(stand_up);
  let milestones = stand_up.milestones
  dispatch({
    type: EDIT_STAND_UP_MILESTONE,
    payload: { milestones, answers }
  })
}

export const editAnswerSecureAttachment = (mil, answers) => async (dispatch) => {
  let before = mil.answer;
  switch (mil.answer) {
    case 'Not Answer':
      mil.answer = 'Completed'
      break;
    case 'Completed':
      mil.answer = 'Uncompleted'
      break;
    case 'Uncompleted':
      mil.answer = 'Completed'
      break;
    default:
      break;
  }


  if (mil.answer === 'Completed' && before === 'Not Answer') {
    answers.completed++
  } else if (mil.answer === 'Completed') {
    answers.completed++
    answers.uncompleted--
  }
  if (mil.answer === 'Uncompleted' && before === 'Not Answer') {
    answers.uncompleted++
  } else if (mil.answer === 'Uncompleted') {
    answers.completed--
    answers.uncompleted++
  }

  let secure_attachment = JSON.parse(localStorage.getItem('secure_attachment'))
  secure_attachment.milestones.map(milstone => {
    if(milstone.id === mil.id) {
      milstone.answer = mil.answer
    }
  })
  secure_attachment.answers = answers
  let milestones = secure_attachment.milestones
  localStorage.secure_attachment = JSON.stringify(secure_attachment);
  dispatch({
    type: EDIT_SECURE_ATTACHMENT_MILESTONE,
    payload: { milestones, answers }
  })
}

export const finishedAssesstmentStandUp = () => (dispatch) => {
  dispatch({
    type: FINISHED_ASSESSTMENT_STAND_UP,
    payload: true
  })
}

export const finishedAssesstmentSecureAttachment = () => (dispatch) => {
  dispatch({
    type: FINISHED_ASSESSTMENT_SECURE_ATTACHMENT,
    payload: true
  })
}

export const setAreaColor = (status) => (dispatch) => {
  dispatch({
    type: SET_AREA_COLOR,
    payload: status
  })
};

export const toggleAreaColor = () => (dispatch) => {
  dispatch({
    type: TOGGLE_AREA_COLOR,
  })
}

export const updateAnswersStandUp = (answers) => (dispatch) => {
  dispatch({
    type: UPDATE_ANSWERS_STAND_UP,
    payload: answers
  })
}

export const updateAnswersSecureAttachment = (answers) => (dispatch) => {
  dispatch({
    type: UPDATE_ANSWERS_SECURE_ATTACHMENT,
    payload: answers
  })
}

export const updateNumMilStandUp = (num) => (dispatch) => {
  dispatch({
    type: UPDATE_NUM_MIL_STAND_UP,
    payload: num
  })
}

export const updateNumMilSecureAttachment = (num) => (dispatch) => {
  dispatch({
    type: UPDATE_NUM_MIL_SECURE_ATTACHMENT,
    payload: num
  })
}

export const milestoneCompleted = () => (dispatch) => {
  dispatch({
    type: SET_MILESTONE_COMPLETED
  })
}


const createSkill = (response) => {
  const rst = response.data.data.skill;
  rst.milestones.map(mil => {
    mil.answer = "Not Answer"
  })
  const { id, area_id, age_range, parent_skill_id, title, description } = rst;
  const skill = {
    main_info: {
      id,
      area_id,
      age_range,
      parent_skill_id,
      title,
      description
    },
    milestones: rst.milestones
  }

  return skill
}