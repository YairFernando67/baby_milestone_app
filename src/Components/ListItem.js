import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { editAnswerSecureAttachment, editAnswerStandUp } from '../Actions'

const Container = styled.div`
  & > div:nth-child(1) {
    & > small.age {
      color: #718093;
    }
  }

  & > div:nth-child(2) {
    
  }
  @media(max-width: 768px) {
    flex-direction: column;
    padding-left: 0;

    & > div {
      width: 100% !important;
    }

    & > div:nth-child(1) {
      padding-right: 0 !important;

      & > small:nth-child(2) {
        color: #718093;
      }
    }

    & > div:nth-child(2) {
      text-align: center;
      margin-bottom: 20px;
    }
  }

`
const ButtonContainer = styled.div`
  & > button {
    width: 200px;
    border: none;
    color: #fff;
    background: #75B753;
    border-radius: 25px;
    padding: 10px 20px;
    font-weight: 500;
  }

  & > button.Answer {
    background: #dcdde1;
    color: #718093;
  }

  & > button.Completed {
    background: #75B753;
    color: #fff;
  }

  & > button.Uncompleted {
    background: #c8d6e5;
    color: #75B753;
  }
`

export class ListItem extends Component {

  onSelect(milestone) {
    if (milestone.skill_id === 23) {
      this.props.editAnswerStandUp(milestone)
    }

    if (milestone.skill_id === 2) {
      this.props.editAnswerSecureAttachment(milestone)
    }
  }

  render() {
    return (
      <Container className="pl-5 pr-5 container mt-4 px-4 d-flex justify-content-between align-items-center border-bottom">
        <div className="pr-5 w-75 pb-4">
          <h5>{this.props.milestone.title}</h5>
          <small className="mb-2">{this.props.milestone.description}</small>
          <br />
          <small className="age">Usually achieved between {this.props.age_range} months</small>
        </div>
        <ButtonContainer>
          <button
            onClick={() => this.onSelect(this.props.milestone)}
            className={this.props.milestone.answer}
          >
            {this.props.milestone.answer}
          </button>
        </ButtonContainer>
      </Container>
    )
  }
}

export default connect(null, { editAnswerSecureAttachment, editAnswerStandUp })(ListItem)
