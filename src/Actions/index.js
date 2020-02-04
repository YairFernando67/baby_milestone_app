import kinedu from '../API/kinedu';
import {
  FETCH_SECURE_ATTACHMENT_MILESTONE,
  FETCH_STAND_UP_MILESTONE,
  EDIT_SECURE_ATTACHMENT_MILESTONE,
  EDIT_STAND_UP_MILESTONE,
  FINISHED_ASSESSTMENT_SECURE_ATTACHMENT,
  FINISHED_ASSESSTMENT_STAND_UP
} from '../Types'

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

export const editAnswerStandUp = (mil) => async (dispatch) => {
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
  let milestones = localStorage.getItem('stand_up');
  milestones = JSON.parse(milestones);
  milestones.map(milestone => {
    if (milestone.id === mil.id) {
      milestone.answer = mil.answer
    }
  })
  dispatch({
    type: EDIT_STAND_UP_MILESTONE,
    payload: milestones
  })
}

export const editAnswerSecureAttachment = (mil) => async (dispatch) => {
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
  let milestones = localStorage.getItem('secure_attachment')
  milestones = JSON.parse(milestones)
  milestones.map(milstone => {
    if(milstone.id === mil.id) {
      milstone.answer = mil.answer
    }
  })
  dispatch({
    type: EDIT_SECURE_ATTACHMENT_MILESTONE,
    payload: milestones
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
    milestones: rst.milestones,
    finished_assesstment: false
  }

  return skill
}