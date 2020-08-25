import React from 'react';
import TransactionList from './TransactionList';

const Expenses = ({ num_expenses, expenses_arr, deleteArrayItem }) => {
  // Calculate total expenses to display to screen
  const calcExpensesTotal = () => {
    let expenses_total = 0.0;
    expenses_arr.forEach(
      el => (expenses_total = expenses_total + parseFloat(el.amount))
    );
    return <>${expenses_total * -1}</>;
  };
  return (
    <div id="expenses-container">
      <p className="expenses-header">
        Expenses: <span className="expenses-total">{calcExpensesTotal()}</span>
      </p>

      <TransactionList
        items_arr={expenses_arr}
        deleteArrayItem={deleteArrayItem}
      />
    </div>
  );
};

export default Expenses;
