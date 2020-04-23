import React from 'react'
import styled from 'styled-components';
import Icon from '../Icon/Icon';

const ContainerLogOut = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  transform: translateX(-1.5rem);
  opacity: 0;
  transition: all 0.2s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-icon-settings {
    fill: #fff;
    height: 1.5rem;
    width: 1.5rem;
  }

  &:hover button {
    opacity: 1;
    transform: translate(0);
    display: block;
  }

  &:hover button > svg {
    fill: #1faddf;
  }

  button {
    border: none;
    position: absolute;
    top: 60%;
    left: 92%;
    width: 8rem;
    opacity: 0;
    display: none;
    transition: all 0.2s ease;
    padding: .5rem 1rem;

    transition: all 0.5s ease-in;
    opacity: 0;
    visivility: hidden;
    transform: translateX(20px);
    background: #fff;
    color: #1faddf;
    border-radius: 3px;

    &:hover {
    }

    svg {
      height: 1rem;
      width: 1rem;
      fill: #fff;
      margin-right: 0.5rem;
    }
  }
`

const LogOut = (props) => {
  return (
    <ContainerLogOut className="btnLogOut">
      <Icon name="icon-settings" class="settings" />
      <button className="ui red google button" onClick={props.onSignOutClick}>
          <Icon name="icon-google" />
          Sign Out
      </button>
    </ContainerLogOut>
    )
};

export default LogOut;