import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { DOMGet } from '../Dom/Dom'
import LogOut from '../LogOutButton/LogOut';
import { setAreaColor, toggleAreaColor, signIn, signOut } from '../../Actions'
import MilestoneDetail from '../Milestones/MilestoneList/MilestoneDetail/MilestoneDetail';
import SideBarMenu from '../SideBarMenu/SideBarMenu';

const HeaderContainer = styled.div`
  background: ${props => props.area_color ? "#D43571" : "#1FADDF"};
  height: 400px;
  margin: 0 auto !important;
  text-align: center;
  color: #fff;

  &:hover > .mil-detail,
  &:hover > .btnLogOut {
    transform: translate(0);
    opacity: 1;
  } 

  & > .menu-container {
    margin: 0 auto;
    
    & > a,
    & > button {
      text-decoration: none;
      border: 1px solid #fff;
      padding: 10px 20px;
      width: 200px;
      text-align: center;
      display: inline-block;
      background: ${props => props.area_color ? "#D43571" : "#1FADDF"};
    }

    & > button:disabled {
      cursor: not-allowed;
      opacity: .8;
      background-color: red;
    }


    & > a:nth-child(1),
    & > button:nth-child(1) {
      border-radius: 25px 0 0 25px;
      color: ${props => props.area_color ? "#fff" : "#1FADDF"} !important;
      background-color: ${props => props.area_color ? "#D43571" : "#fff"} !important;
    }

    & > a:nth-child(2),
    & > button:nth-child(2) {
      color: ${props => props.area_color ? "#D43571" : "#fff"} !important;
      background-color: ${props => props.area_color ? "#fff" : "#1FADDF"} !important;
      border-radius: 0 25px 25px 0;
    }
  }

  & > .skill-info {
    margin: 0 auto;
  }

  @media(max-width: 768px) {
    height: auto;
    & > .menu-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > a {
        border-radius: 25px !important;
        margin-bottom: 10px;
        width: 100%;
      }
    }
  }
   
`

class Header extends React.Component {
  state = { area_color: false }

  onSignOutClick = () => {
    this.props.signOut();
  }

  setBackground = () => {
    this.props.setAreaColor(false);
  }

  reSetBackground = () => {
    this.props.setAreaColor(true);
  }

  hideHeader = () => {
    if (DOMGet('.headerContainer')) {
      DOMGet('.headerContainer').style.display = 'none';
    }
  }

  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <LogOut onSignOutClick={this.onSignOutClick} />
      )
    }else {
      this.hideHeader();
    }
  }

  render() {
    const { area_color } = this.props;
    let stand_up_title = '';
    let stand_up_description = '';
    if (this.props.stand_up.main_info) {
      const { title, description } = this.props.stand_up.main_info;
      stand_up_title = title;
      stand_up_description = description
    }
    const { answers, numMil } = this.props.secure_attachment;
    return(
      <HeaderContainer area_color={area_color} className="headerContainer">
        <SideBarMenu />
        { area_color ? <MilestoneDetail answers={answers} numMil={numMil} /> : 
              <MilestoneDetail answers={this.props.stand_up.answers} numMil={this.props.stand_up.numMil} />}
        {this.renderAuthButton()}
        <h1>Areas</h1>
        <div className="menu-container border-bottom pb-4 w-75">
          {!this.props.finish_secure_attachment ? 
            <Link to="/" onClick={this.setBackground} >Social & Emotional</Link> :
            <button disabled={true}>Social & Emotional</button>}
          {!this.props.finish_stand_up ? 
             <Link to="/physical" onClick={this.reSetBackground} >Physical</Link> :
            <button disabled={true}>Physical</button>}
        </div>
        <div className="skill-info mt-4 pt-1 mt-1 pb-3 w-75 text-center">
          <h3 className="text-center">{!area_color ? stand_up_title : this.props.secure_attachment.main_info.title }</h3>
          <p>{!area_color ? stand_up_description : this.props.secure_attachment.main_info.description }</p>
        </div>
      </HeaderContainer>
    );
  }
};

const mapStateToProps = state => {
  return {
    stand_up: state.stand_up,
    secure_attachment: state.secure_attachment,
    finish_stand_up: state.stand_up.finished_assesstment,
    finish_secure_attachment: state.secure_attachment.finished_assesstment,
    area_color: state.header.area_color,
    isSignedIn: state.auth.isSignedIn,
    user: state.auth
  }
}

export default connect(mapStateToProps, { setAreaColor, toggleAreaColor, signIn, signOut })(Header);