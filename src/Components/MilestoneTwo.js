import React, { Component } from 'react'
import { connect } from 'react-redux';
import MilestoneList from './MilestoneList';
import styled from 'styled-components';

const Spinner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  top: 75%;
  right: 50%;
`

export class MilestoneTwo extends Component {
  render() {
    const { milestones, main_info } = this.props.stand_up;
    let stand_up = localStorage.getItem('stand_up');
    stand_up = JSON.parse(stand_up);
    if (this.props.stand_up.milestones) {
      if (stand_up === null ) {
        return <MilestoneList milestones={milestones} age_range={main_info.age_range} />
      } else {
        return <MilestoneList milestones={stand_up} age_range={main_info.age_range} />
      }
    }
    return (
      <Spinner className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
}

const mapStateToProps = state => {
  return {
    stand_up: state.stand_up
  }
}

export default connect(mapStateToProps)(MilestoneTwo)
