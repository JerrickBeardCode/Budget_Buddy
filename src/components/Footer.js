// Footer component
import React from 'react';

const Footer = ({ project_title, name, year }) => {
  return (
    <div id="footer-container">
      <div id="footer">
        {project_title} - {name} {year}
      </div>
    </div>
  );
};

export default Footer;
