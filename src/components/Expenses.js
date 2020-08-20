import React from 'react';
import TransactionList from './TransactionList';

const Expenses = ({ num_expenses, expenses_arr }) => {
  return (
    <div id="expenses-container">
      <p className="expenses-header">
        Expenses: <span className="expenses-total">$-25.49</span>
      </p>

      <TransactionList items_arr={expenses_arr} />
    </div>
  );
};

export default Expenses;
