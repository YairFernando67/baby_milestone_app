import React from 'react'
import styled from 'styled-components';
import Icon from './Icon';

const ContainerMilDetail = styled.div`
  position: absolute;
  top: 8%;
  right: 8%;
  transform: translateX(1.5rem);
  opacity: 0;
  transition: all 0.2s ease-in;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #fff;
    transition: all 0.2s ease-out;
  }

  &:hover > svg {
    transform: scale(1.2);
  }

  &:hover > .details {
    opacity: 1;
    transform: translate(0);
    display: block;
  }
  
  & > .details {
    position: absolute;
    display: none;
    top: 73%;
    right: 100%;
    background: #fff;
    padding: 1rem 2rem;
    
    flex-direction: column;
    width: 13rem;
    border-radius: 3px;
    border: 1px solid #ccc;
    transition: all 0.5s ease-in;
    opacity: 0;
    visivility: hidden;
    transform: translateX(20px);
  }

  & > .details > span {
    display: block;
    color: #212529;
  }

  & > .details > span:not(:last-child) {
    margin-bottom: .5rem;
  }
`

const MilestoneDetail = (props) => {
  return (
    <ContainerMilDetail className="mil-detail">
      <Icon name="icon-star" />
      <div className="details">
        <span>Milestones: <strong>{props.numMil}</strong></span>
        <span>Completed: <strong>{props.answers.completed}</strong></span>
        <span>Uncompleted: <strong>{props.answers.uncompleted}</strong></span>
        <span>Not Answer: <strong>{props.numMil - (props.answers.uncompleted + props.answers.completed)}</strong></span>
      </div>

    </ContainerMilDetail>
  )
};

export default MilestoneDetail