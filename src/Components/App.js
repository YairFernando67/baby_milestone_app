import React, { Component } from 'react'
import MilestoneOne from './MilestoneOne'
import MilestoneTwo from './MilestoneTwo'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchSecureAttachmentSkill, fetchStandUpSkill, updateAnswersStandUp, updateAnswersSecureAttachment } from '../Actions'
import history from '../history';
import { getLocalStorate } from './LocalStorage/LocalStorage';

export class App extends Component {
  componentDidMount() {
    this.props.fetchSecureAttachmentSkill();
    this.props.fetchStandUpSkill();
    if (getLocalStorate('stand_up') !== null ) {
      let stand_up = getLocalStorate('stand_up');
      this.props.updateAnswersStandUp(stand_up.answers);
    }
    if (getLocalStorate('secure_attachment') !== null ) {
      let secure_attachment = getLocalStorate('secure_attachment');
      this.props.updateAnswersSecureAttachment(secure_attachment.answers);
    }
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={MilestoneTwo} />
            <Route path="/physical" exact component={MilestoneOne} />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("INITIAL STATE: ",state);
  return {
    stand_up: state.stand_up,
    secure_attachment: state.secure_attachment
  }
}

export default connect(mapStateToProps, { fetchSecureAttachmentSkill, 
                fetchStandUpSkill, 
                updateAnswersStandUp, 
                updateAnswersSecureAttachment })(App);
