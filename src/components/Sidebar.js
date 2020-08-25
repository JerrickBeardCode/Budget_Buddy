import React from 'react';

/* PROPS: onIncButtonClick - callback to Workspace.js
          onExpButtonClick - callback to Workspace.js
          incomes_arr - current array of incomes
          expenses_arr - current array of expenses
*/
class Sidebar extends React.Component {
  // Update the total (called in the jsx)
  calcTotal = () => {
    // Calculate the incomes total
    let incomes_total = 0.0;
    this.props.incomes_arr.forEach(
      el => (incomes_total = incomes_total + parseFloat(el.amount)) // Convert string to float!
    );

    // Calculate the expenses total
    let expenses_total = 0.0;
    this.props.expenses_arr.forEach(
      el => (expenses_total = expenses_total + parseFloat(el.amount)) // Convert string to float!
    );

    // Calculate true total and round to two decimal places
    let true_total = incomes_total + -1 * expenses_total;

    // Round to 2 consistent decimals
    true_total = Number(Math.round(true_total + 'e' + 2) + 'e-' + 2).toFixed(2);

    // Return true total
    return <>${true_total}</>;
  };

  render() {
    // Destructure props
    const { onIncButtonClick, onExpButtonClick } = this.props;

    return (
      <div id="sidebar-container">
        <p className="sidebar-header">Budget Commands</p>
        <button
          className="sidebar-inc-button"
          onClick={() => onIncButtonClick()}
        >
          Add Income <span className="inc-icon">+</span>
        </button>
        <button
          className="sidebar-exp-button"
          onClick={() => onExpButtonClick()}
        >
          Add Expense <span className="exp-icon">-</span>
        </button>
        <p className="sidebar-total">
          Total:
          <span className="total">
            <br />

            {this.calcTotal()}
          </span>
        </p>
      </div>
    );
  }
}

export default Sidebar;
