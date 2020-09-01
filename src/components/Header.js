// Header component. Returns div for title passed in through props
import React from 'react';

const Header = props => {
  const generateDate = () => {
    const month_names = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const d = new Date();

    return `${month_names[d.getMonth()]} ${d.getFullYear()}`;
  };

  return (
    <div id="header-container">
      <div id="main-header">
        <h1 id="title">{props.header_title}</h1>
        <h1 className="curr-date">{generateDate()}</h1>
      </div>
    </div>
  );
};

export default Header;
