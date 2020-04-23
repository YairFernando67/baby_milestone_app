import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../Actions';
import Icon from '../Icon/Icon';
import styled from 'styled-components';
import Background from './Background';
import Dots from './Dots';

const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: none;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 2rem 3rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  height: 16rem;
  justify-content: space-around;
  box-shadow: 0 50px 100px rgba(255, 255, 255, 0.1), 0 15px 35px rgba(255, 255, 255, 0.1), 0 5px 15px rgba(255, 255, 255, 0.2);

  h2 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 300;
  }

  button {
    display: inline-block;
    width: 100%;
    margin-top: 1rem;
    padding: 0.7rem 0;
    border: none;
    background: #1396E7;
    border-radius: 3px;
    color: #fff;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: #fff;
      margin-right: 1rem;
    }
  }
`

class GoogleLogin extends React.Component{
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({ 
        clientId: '230762354455-6n0sp8gv1ed3nac6c5e22m1o426g3fsp.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
    document.querySelector('.headerContainer').style.display = 'none';
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    }else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    console.log(this.auth)
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  displayHeader = () => {
    document.querySelector('.headerContainer').style.display = 'block';
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }else if (this.props.isSignedIn) {
      this.displayHeader();
    }else {
      return (
        <LoginContainer>
          <Dots />
          <h2>Baby Milestones</h2>
          <button className="ui red google button" onClick={this.onSignInClick}>
              <Icon name="icon-google" />
              Sign In
          </button>
        </LoginContainer>
      )
    }
  } 

  

  render() {
  return (
      <>
        <Background />
        {this.renderAuthButton()}
      </>      
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect( mapStateToProps, { signIn, signOut })(GoogleLogin);