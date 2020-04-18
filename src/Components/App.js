import React, { Component } from 'react'
import MilestoneOne from './MilestoneOne'
import MilestoneTwo from './MilestoneTwo'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchSecureAttachmentSkill, fetchStandUpSkill } from '../Actions'
import history from '../history';

export class App extends Component {
  componentDidMount() {
    this.props.fetchSecureAttachmentSkill();
    this.props.fetchStandUpSkill();
    // if (this.props.secure_attachment.milestones && this.props.stand_up.milestones) {
    //   console.count("count");
    //   localStorage.stand_up = JSON.stringify(this.props.stand_up);
    //   localStorage.secure_attachment = JSON.stringify(this.props.secure_attachment);
    // }
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

export default connect(mapStateToProps, { fetchSecureAttachmentSkill, fetchStandUpSkill})(App);
