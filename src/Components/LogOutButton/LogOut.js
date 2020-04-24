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

  &:hover button > svg {
    
  }

  button {
    border: none;
    position: absolute;
    top: 60%;
    left: 92%;
    transition: all 0.5s ease-in;
    transform: translateX(20px);
    background: transparent;
    margin: 0;
    padding: 0;
    outline: none;
  }
  
`

const LogOut = (props) => {

  const showSideBar = () => {
    document.querySelector('.sideBar').classList.add('show');
  }

  return (
    <ContainerLogOut className="btnLogOut">
      <button onClick={() => showSideBar()} >
        <Icon name="icon-settings" class="settings" />
      </button>
      {/* <button className="ui red google button" onClick={props.onSignOutClick}>
          <Icon name="icon-google" />
          Sign Out
      </button> */}
    </ContainerLogOut>
    )
};

export default LogOut;