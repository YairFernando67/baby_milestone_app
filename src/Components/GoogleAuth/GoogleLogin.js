import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../Actions';
import styled from 'styled-components';
import Background from './Background';
import Dots from './Dots';
import ReactGoogleLogin from 'react-google-login';
import ReactFacebookLogin from 'react-facebook-login';
import { DOMGet } from '../Dom/Dom'

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
  height: 20rem;
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

  displayHeader = () => {
    if (DOMGet('.headerContainer')) {
      DOMGet('.headerContainer').style.display = 'block';
    }
  }

  renderAuthButton() {
    if (this.props.isSignedIn) {
      this.displayHeader();
    }else {
      return (
        <LoginContainer>
          <Dots />
          <h2>Baby Milestones</h2>
          <ReactFacebookLogin  
            appId="230094358267542"
            textButton="Log in with Facebook"
            fields="name, email, picture"
            callback={this.responseFacebook}
            cssClass="btn btn-outline-primary"
          />

          <ReactGoogleLogin 
            clientId="230762354455-6n0sp8gv1ed3nac6c5e22m1o426g3fsp.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            className="btn btn-outline-danger"
          />
        </LoginContainer>
      )
    }
  } 

  responseGoogle = (res) => {
    let userInfo = {
      id: res.profileObj.googleId,
      name: res.profileObj.name,
      email: res.profileObj.email,
      photoUrl: res.profileObj.imageUrl
    }
    this.props.signIn(userInfo);
  }

  responseFacebook = (res) => {
    let userInfo = {
      id: res.id,
      name: res.name,
      email: res.email,
      photoUrl: res.picture.data.url
    }
    this.props.signIn(userInfo);
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

export default connect( mapStateToProps, { signIn })(GoogleLogin);