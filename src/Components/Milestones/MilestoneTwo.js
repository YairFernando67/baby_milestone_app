import React, { Component } from 'react'
import { connect } from 'react-redux';
import MilestoneList from './MilestoneList/MilestoneList';
import styled from 'styled-components';
import { updateAnswersStandUp } from '../../Actions'
import { getLocalStorate, setLocalStorage } from '../LocalStorage/LocalStorage';

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
    if (this.props.stand_up.milestones && this.props.stand_up.main_info && getLocalStorate('stand_up') === null) {
      this.props.stand_up.numMil = this.props.stand_up.milestones.length;
      setLocalStorage('stand_up', this.props.stand_up);
      const { milestones, main_info, answers, numMil } = this.props.stand_up;
      return <MilestoneList milestones={milestones} age_range="12" answers={answers} numMil={numMil} />
    }
    
    if (getLocalStorate('stand_up') !== null ) {
      let stand_up = getLocalStorate('stand_up');
      const { milestones, main_info, answers, numMil } = stand_up;
      return <MilestoneList milestones={milestones} age_range="122" answers={answers} numMil={numMil} />
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

export default connect(mapStateToProps, { updateAnswersStandUp })(MilestoneTwo)
