import React, { Component } from 'react'
import ListItem from './ListItem';

export class MilestoneList extends Component {

  renderContent = () => {
    if (this.props.milestones) {
      return(
        <div>
          {this.props.milestones.map(mil => (
            <ListItem key={mil.id} milestone={mil} age_range={this.props.age_range} />
          ))}
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default MilestoneList
