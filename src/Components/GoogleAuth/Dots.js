import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column:
  width: 100%;
  justify-content: center;

  & > * {
    height: 0.7rem;
    width: 0.7rem;
    border-radius: 100px;
    border: none;
  }

  & > div:nth-child(1) {
    background-color: #1faddf;
    margin-right: 0.3rem;
  }

  & > div:nth-child(2) {
    background-color: #d43571;
  }
`

const Dots = () => {
  return (
    <>
      <Container>
        <div></div>
        <div></div>
      </Container>
    </>
  )
}

export default Dots;

