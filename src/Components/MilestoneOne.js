import React, { Component } from 'react'
import { connect } from 'react-redux';
import MilestoneList from './MilestoneList';
import styled from 'styled-components'
import { getLocalStorate, setLocalStorage } from './LocalStorage/LocalStorage';

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
    // let secure_attachment = JSON.parse(localStorage.getItem('secure_attachment'))
    // console.log("SECURE ATTACHMENT: ", this.props.secure_attachment);
    // if (this.props.secure_attachment.milestones) {
    //   localStorage.secure_attachment = JSON.stringify(this.props.secure_attachment);
    //   const { milestones, main_info } = this.props.secure_attachment;
    //   return <MilestoneList milestones={milestones} age_range={main_info.age_range} />
    // }

    if (this.props.secure_attachment.milestones && getLocalStorate('secure_attachment') === null) {
      console.log("ENTRO")
      // localStorage.secure_attachment = JSON.stringify(this.props.secure_attachment);
      setLocalStorage('secure_attachment', this.props.secure_attachment);
      const { milestones, main_info } = this.props.secure_attachment;
      return <MilestoneList milestones={milestones} age_range={main_info.age_range} />
    }
    
    if (getLocalStorate('secure_attachment') !== null ) {
      let secure_attachment = getLocalStorate('secure_attachment')
      console.log(secure_attachment);
      const { milestones } = secure_attachment;
      console.log(secure_attachment.main_info.age_range);
      console.log(milestones);
      return <MilestoneList milestones={milestones} age_range={secure_attachment.main_info.age_range} />
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
