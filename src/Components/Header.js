import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>Areas</h1>
        <div className="menu-container border-bottom pb-4 w-75">
          <Link to="/">Social & Emotional</Link>
          <Link to="/physical" >Physical</Link>
        </div>
        <div className="skill-info mt-4 pt-1 mt-1 pb-3 w-75 text-center">
          <h3 className="text-center">Title</h3>
          <p>Description</p>
        </div>
      </div>
    );
  }
};

export default Header;