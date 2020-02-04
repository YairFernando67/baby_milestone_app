import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: ${props => props.area_color ? "#D43571" : "#1FADDF"};
  height: 400px;
  margin: 0 auto !important;
  text-align: center;
  color: #fff;

  & > .menu-container {
    margin: 0 auto;
    
    & > a {
      text-decoration: none;
      border: 1px solid #fff;
      padding: 10px 20px;
      width: 200px;
      text-align: center;
      display: inline-block;
      background: ${props => props.area_color ? "#D43571" : "#1FADDF"};
    }


    & > a:nth-child(1) {
      border-radius: 25px 0 0 25px;
      color: ${props => props.area_color ? "#fff" : "#1FADDF"} !important;
      background-color: ${props => props.area_color ? "#D43571" : "#fff"} !important;
    }

    & > a:nth-child(2) {
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

  setBackground = () => {
    this.setState({ area_color: false })
  }

  reSetBackground = () => {
    this.setState({ area_color: true })
  }

  render() {
    const { area_color } = this.state;
    let secure_attachment_title = '';
    let secure_attachment_description = '';
    if (this.props.secure_attachment.main_info) {
      const { title, description } = this.props.secure_attachment.main_info;
      secure_attachment_title = title;
      secure_attachment_description = description
    }
    return(
      <HeaderContainer area_color={area_color}>
        <h1>Areas</h1>
        <div className="menu-container border-bottom pb-4 w-75">
          <Link to="/" onClick={this.setBackground} >Social & Emotional</Link>
          <Link to="/physical" onClick={this.reSetBackground} >Physical</Link>
        </div>
        <div className="skill-info mt-4 pt-1 mt-1 pb-3 w-75 text-center">
          <h3 className="text-center">{area_color ? this.props.stand_up.main_info.title : secure_attachment_title }</h3>
          <p>{area_color ? this.props.stand_up.main_info.description : secure_attachment_description }</p>
        </div>
      </HeaderContainer>
    );
  }
};

const mapStateToProps = state => {
  return {
    stand_up: state.stand_up,
    secure_attachment: state.secure_attachment
  }
}

export default connect(mapStateToProps)(Header);