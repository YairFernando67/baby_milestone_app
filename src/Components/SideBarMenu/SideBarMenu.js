import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { connect } from 'react-redux'
import { signOut } from '../../Actions'

const SideBar = styled.div`
  height: 1208px;
  display: flex;
  width: 17rem;
  position: absolute;
  transform: translateX(-273px);
  transition: all .5s ease;
  background: #333;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  align-items: center;

  span {
    color: #fff;
    margin-bottom: .5rem;
  }

  .sideBarImg > .name {
    transition: all 0.2s ease-in;
    opacity: 0;
    position: absolute;
    top: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  .sideBarImg {
    width: 6rem;
    height: 6rem;
    margin-bottom: 1rem;
    position: relative;
    backface-visibility: hidden;
    outline: none;
    overflow: hidden;
    border-radius: 100px;
    
    & > img {
      clip-path: circle(50% at 50% 50%);
      shape-outside: circle(50% at 50% 50%);
      width: 100%;
      transform: scale(1.2);
      backface-visibility: hidden;
      transition: all 0.5s;
    }
  }
  
  .sideBarImg:hover > .name {
    transform: translate(-50%, -50%);
    opacity: 1;
  }

  .sideBarImg:hover > img {
    transform: scale(1);
    filter: blur(1px) brightness(90%);
  }

  button {
    border: none;
    background: transparent;
    margin-top: 3rem;
    border-bottom: 1px solid #fff;
    padding: .5rem 2rem;
    color: #fff;
    outline: none;
  }

  &.show {
    transform: translate(0);
  }
`

class SideBarMenu extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.handleHideSideBar, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleHideSideBar, true);
  }

  handleHideSideBar = event => {
    const node = ReactDOM.findDOMNode(this);

    if (!node || !node.contains(event.target)) {
        document.querySelector('.sideBar').classList.remove('show');
    }
  }

  clickSignOut = () => {
    this.props.signOut();
  }

  render() {
    return (
      <SideBar className="sideBar">
        <div className="sideBarImg">
          <img src={this.props.userInfo.photoUrl} alt="Profile" />
          <span className="name">{this.props.userInfo.name}</span>
        </div>
        <span>{this.props.userInfo.email}</span>
        <button onClick={this.clickSignOut}>Sign Out</button>
      </SideBar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth
  }
}


export default connect(mapStateToProps, { signOut })(SideBarMenu);