import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../Actions';
import Icon from '../Milestones/MilestoneList/MilestoneDetail/Icon';

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

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }else if (this.props.isSignedIn) {
      return (
        <div>
          <h2></h2>
          <button className="ui red google button" onClick={this.onSignOutClick}>
              <Icon name="icon-google" />
              Sign Out
          </button>
        </div>
      )
    }else {
      return (
        <div>
          <h2>Log in to Milestones</h2>
          <button className="ui red google button" onClick={this.onSignInClick}>
              <Icon name="icon-google" />
              Sign In
          </button>
        </div>
      )
    }
  } 

  

  render() {
  return (
      <div>
        <h2>S</h2>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect( mapStateToProps, { signIn, signOut })(GoogleLogin);