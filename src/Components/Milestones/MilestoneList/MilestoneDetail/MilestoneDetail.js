import React from 'react'
import styled from 'styled-components';
import Icon from './Icon';

const Container = styled.div`
  position: fixed;
  top: 8%;
  right: 8%;
  border: 1px solir #ccc;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #fff;
  }
`

const MilestoneDetail = (props) => {
  return (
    <Container>
      <Icon name="icon-star" />
    </Container>
  )
};

export default MilestoneDetail