import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../Actions';
import Icon from '../Milestones/MilestoneList/MilestoneDetail/Icon';
import styled from 'styled-components';
import Background from './Background';
import history from '../../history'

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

  h2 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 300;
  }

  button {
    display: inline-block;
    width: 100%;
    margin-top: 1rem;
    padding: 0.5rem 0;
    border: none;
    background: #1396E7;
    border-radius: 3px;
    color: #fff;

    svg {
      width: 2rem;
      height: 2rem;
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
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  displayHeader = () => {
    // history.push('/');
    document.querySelector('.headerContainer').style.display = 'block';
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }else if (this.props.isSignedIn) {
      this.displayHeader();
      // return (
      //   <LoginContainer>
      //     <h2>Log Out to Milestones</h2>
      //     <button className="ui red google button" onClick={this.onSignOutClick}>
      //         <Icon name="icon-google" />
      //         Sign Out
      //     </button>
      //   </LoginContainer>
      // )
    }else {
      return (
        <LoginContainer>
          <h2>Log in to Milestones</h2>
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