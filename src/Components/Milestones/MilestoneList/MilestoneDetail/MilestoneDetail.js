import React from 'react'
import styled from 'styled-components';
import Icon from './Icon';

const ContainerMilDetail = styled.div`
  position: absolute;
  top: 8%;
  right: 8%;
  border: 1px solir #ccc;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #fff;
    transition: all 0.8s ease-out;
  }

  &:hover > svg {
    transform: rotate(360deg);
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
    padding: .5rem 1rem;
    
    flex-direction: column;
    width: 9rem;
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
`

const MilestoneDetail = (props) => {
  return (
    <ContainerMilDetail>
      <Icon name="icon-star" />
      <div className="details">
        <span>Milestones: <strong>{props.numMil}</strong></span>
        <span>Answered: <strong>{props.answers}</strong></span>
        <span>Not Answer: <strong>{props.numMil - props.answers}</strong></span>
      </div>

    </ContainerMilDetail>
  )
};

export default MilestoneDetail