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

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 100px;
    margin-bottom: 1rem;
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
        <img src={this.props.userInfo.photoUrl} alt="Profile" />
        <span>{this.props.userInfo.name}</span>
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