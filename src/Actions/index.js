import kinedu from '../API/kinedu';
import {
  FETCH_SECURE_ATTACHMENT_MILESTONE,
  FETCH_STAND_UP_MILESTONE
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