import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'

const Spinner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  top: 75%;
  right: 50%;
`

export class MilestoneOne extends Component {
  render() {
    const { milestones, main_info } = this.props.secure_attachment;
    let secure_attachment = localStorage.getItem('secure_attachment')
    secure_attachment = JSON.parse(secure_attachment)
    if (this.props.secure_attachment.milestones) {
      if (secure_attachment === null) {
        return <MilestoneList milestones={milestones} age_range={main_info.age_range} />
      } else {
        return <MilestoneList milestones={secure_attachment} age_range={main_info.age_range} />
      }
    }
    return (
      <Spinner className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
}

const mapStateToProps = state => {
  return {
    secure_attachment: state.secure_attachment
  }
}

export default connect(mapStateToProps)(MilestoneOne)
