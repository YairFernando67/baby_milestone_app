import React from 'react';
import { connect } from 'react-redux';
import { finishedAssesstmentStandUp, finishedAssesstmentSecureAttachment, toggleAreaColor } from '../../Actions'
import styled from 'styled-components';
import { milestoneError, milestoneSent } from '../Messages/Messages'
import history from '../../history';

const PaginationContainer = styled.div`
  & > button {
    outline: none;
    background: #75B753;
    color: #fff;
    border-radius: 25px;
    border: none;
    padding: 10px 20px;
    margin: 4px;
    width: 200px;
  }

  & > button:not(:last-child) {
    margin-right 2rem;
  }

  & > button:active,
  & > button:focus {
    outline: none;
  }
`

export const Pagination = (props) => {
  const nextPage = (e) => {
    e.preventDefault();
    props.nextPage()
  }

  const prevPage = (e) => {
    e.preventDefault();
    props.prevPage()
  }

  const sendAssestment = async () => {
    if(props.milestone[0].skill_id === 23) {
      console.log(props.stand_up_answers);
      if (props.stand_up_answers < props.stand_up_num_mil) {
        milestoneError(props.stand_up_answers, props.stand_up_num_mil)
      } else {
        let rst = await milestoneSent();
        console.log(rst);
        if (rst) {
          props.finishedAssesstmentSecureAttachment()
          history.push('/physical')
          props.toggleAreaColor();
        }
      }
    }

    if(props.milestone[0].skill_id === 2) {
      if (props.secure_attachment_answers < props.secure_attachment_num_mil) {
        milestoneError(props.secure_attachment_answers, props.secure_attachment_num_mil)
      } else {
        let rst = await milestoneSent();
        if (rst) {
          props.finishedAssesstmentStandUp()
          history.push('/')
          props.toggleAreaColor();
        }
      }
    }    
  }
  const { page, total_pages } = props
  return (
    <PaginationContainer className="mt-5 d-flex justify-content-center mb-5 pb-5 pt-5 px-5">
      {page > 1 ? <button onClick={prevPage}>Back</button> : '' }
      {page < total_pages ? <button onClick={nextPage}>Continue</button> : '' }
      {page === total_pages ? <button onClick={sendAssestment}>Finish</button> : '' }
    </PaginationContainer>
  )
}

const mapStateToProps = state => {
  return {
    stand_up_answers: state.stand_up.answers,
    secure_attachment_answers: state.secure_attachment.answers,
    stand_up_num_mil: state.stand_up.numMil,
    secure_attachment_num_mil: state.secure_attachment.numMil,
  }
}

export default connect(mapStateToProps,{ 
  finishedAssesstmentStandUp,
  finishedAssesstmentSecureAttachment,
  toggleAreaColor })(Pagination)