// Sidebar Component

import React from 'react';

const Sidebar = props => {
  return (
    <div id="sidebar-container">
      <p className="sidebar-header">Budget Commands</p>
      <button
        className="sidebar-inc-button"
        onClick={() => props.onIncButtonClick()}
      >
        Add Income <span className="inc-icon">+</span>
      </button>
      <button
        className="sidebar-exp-button"
        onClick={() => props.onExpButtonClick()}
      >
        Add Expense <span className="exp-icon">-</span>
      </button>
      <p className="sidebar-total">
        Total:
        <span className="total">
          <br />
          $69.69
        </span>
      </p>
    </div>
  );
};

export default Sidebar;
