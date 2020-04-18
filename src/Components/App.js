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

export default connect(null, { fetchSecureAttachmentSkill, fetchStandUpSkill})(App);
