import React from 'react';
import { connect } from 'react-redux';
import { finishedAssesstmentStandUp, finishedAssesstmentSecureAttachment, toggleAreaColor } from '../Actions'
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { milestoneError, milestoneSent } from './Messages/Messages'
import history from '../history';

const Button = styled.button`
  background: #75B753;
  color: #fff;
  border-radius: 25px;
  border: none;
  padding: 10px 20px;
  margin: 4px;
  width: 200px;
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
      if (props.stand_up_answers < 9) {
        milestoneError(props.stand_up_answers, 9)
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
      if (props.secure_attachment_answers < 10) {
        milestoneError(props.secure_attachment_answers, 10)
      } else {
        let rst = await milestoneSent();
        if (rst) {
          props.finishedAssesstmentStandUp()
          history.push('/')
          props.toggleAreaColor();
        }
      }
    }

    // if(props.milestone[0].skill_id === 2) {
    //   props.finishedAssesstmentStandUp()
    //   history.push('/')
    // }
    // if(props.milestone[0].skill_id === 23) {
    //   props.finishedAssesstmentSecureAttachment()
    //   history.push('/physical')
    // }
    // props.toggleAreaColor();
  
    
  }
  const { page, total_pages } = props
  return (
    <div className="mt-5 d-flex justify-content-center mb-5 pb-5 pt-5 px-5">
      {page > 1 ? <Button onClick={prevPage}>Back</Button> : '' }
      {page < total_pages ? <Button onClick={nextPage}>Continue</Button> : '' }
      {page === total_pages ? <Button onClick={sendAssestment}>Finish</Button> : '' }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    stand_up_answers: state.stand_up.answers,
    secure_attachment_answers: state.secure_attachment.answers,
  }
}

export default connect(mapStateToProps,{ 
  finishedAssesstmentStandUp,
  finishedAssesstmentSecureAttachment,
  toggleAreaColor })(Pagination)