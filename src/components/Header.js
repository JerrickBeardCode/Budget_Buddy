// Header component. Returns div for title passed in through props
import React from 'react';

const Header = props => {
  return (
    <div id="header-container">
      <div id="main-header">
        <h1>{props.header_title}</h1>
      </div>
    </div>
  );
};

export default Header;
