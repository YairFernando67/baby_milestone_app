import React, { Component } from 'react'
import MilestoneOne from './MilestoneOne'
import MilestoneTwo from './MilestoneTwo'
import Header from './Header'
import { Route, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchSecureAttachmentSkill, fetchStandUpSkill } from '../actions'

export class App extends Component {
  componentDidMount() {
    this.props.fetchSecureAttachmentSkill();
    this.props.fetchStandUpSkill();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={MilestoneTwo} />
          <Route path="/physical" exact component={MilestoneOne} />
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, { fetchSecureAttachmentSkill, fetchStandUpSkill})(App);
