import React, { Component } from 'react'
import MilestoneOne from './MilestoneOne'
import MilestoneTwo from './MilestoneTwo'
import Header from './Header'
import { Route, BrowserRouter } from 'react-router-dom'

export class App extends Component {
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

export default App;
