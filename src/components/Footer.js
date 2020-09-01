// Footer component
import React from 'react';

const Footer = ({ project_title, name, year }) => {
  return (
    <div id="footer-container">
      <div id="footer">
        <span className="general">
          {project_title} - {name} {year}
        </span>
        <span className="links">
          <a href="https://github.com/JerrickBeardCode">GitHub</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
