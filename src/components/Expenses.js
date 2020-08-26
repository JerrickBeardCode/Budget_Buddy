import React from 'react';
import TransactionList from './TransactionList';

const Expenses = ({ num_expenses, expenses_arr, deleteArrayItem }) => {
  // Calculate total expenses to display to screen
  const calcExpensesTotal = () => {
    let expenses_total = 0.0;
    expenses_arr.forEach(
      el => (expenses_total = expenses_total + parseFloat(el.amount))
    );

    // Round to 2 decimal places (and flip to negative)
    expenses_total = Number(
      Math.round(expenses_total + 'e' + 2) + 'e-' + 2
    ).toFixed(2);

    return <>$-{expenses_total}</>;
  };
  return (
    <div id="expenses-container">
      <p className="expenses-header">
        Expenses: <span className="expenses-total">{calcExpensesTotal()}</span>
      </p>

      <TransactionList
        items_arr={expenses_arr}
        type="expenses"
        deleteArrayItem={deleteArrayItem}
      />
    </div>
  );
};

export default Expenses;
