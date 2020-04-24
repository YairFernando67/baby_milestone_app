import React, { Component } from 'react'
import MilestoneOne from './Milestones/MilestoneOne'
import MilestoneTwo from './Milestones/MilestoneTwo'
import GoogleLogin from '../Components/GoogleAuth/GoogleLogin'
import Finished from './Finished/Finished'
import Header from './Header/Header'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchSecureAttachmentSkill, 
          fetchStandUpSkill, 
          updateAnswersStandUp, 
          updateAnswersSecureAttachment,
          updateNumMilSecureAttachment,
          updateNumMilStandUp,
          signIn } from '../Actions'
import history from '../history';
import { getLocalStorate } from './LocalStorage/LocalStorage';
import './Styles/Styles.scss'

export class App extends Component {
  componentDidMount() {
    this.props.fetchSecureAttachmentSkill();
    this.props.fetchStandUpSkill();
    if (getLocalStorate('stand_up') !== null ) {
      let stand_up = getLocalStorate('stand_up');
      this.props.updateNumMilStandUp(stand_up.milestones.length)
      this.props.updateAnswersStandUp(stand_up.answers);
    }
    if (getLocalStorate('secure_attachment') !== null ) {
      let secure_attachment = getLocalStorate('secure_attachment');
      this.props.updateNumMilSecureAttachment(secure_attachment.milestones.length)
      this.props.updateAnswersSecureAttachment(secure_attachment.answers);
    }
    if (getLocalStorate('userInfo') !== null) {
      console.log("localstorage not null")
      let userInfo = getLocalStorate('userInfo');
      this.props.signIn(userInfo);
    }

  }
  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
            <Route path="/login" component={GoogleLogin} />
            { this.props.isSignedIn ? <Redirect from='/login' to='/' /> : <Redirect from="/" to="/login" />}
          <Switch>
            <Route path="/" exact component={MilestoneTwo} />
            <Route path="/physical" exact component={MilestoneOne} />
            <Route path="/finished_milestones" exact component={Finished} />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stand_up: state.stand_up,
    secure_attachment: state.secure_attachment,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { fetchSecureAttachmentSkill, 
                fetchStandUpSkill, 
                updateAnswersStandUp, 
                updateAnswersSecureAttachment,
                updateNumMilSecureAttachment,
                updateNumMilStandUp,
                signIn })(App);
