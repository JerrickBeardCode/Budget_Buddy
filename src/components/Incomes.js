import React from 'react';
import TransactionList from './TransactionList';

const Incomes = ({ num_incomes, incomes_arr }) => {
  return (
    <div id="incomes-container">
      <p className="incomes-header">
        Incomes: <span className="incomes-total">$85.99</span>
      </p>

      <TransactionList items_arr={incomes_arr} />
    </div>
  );
};

export default Incomes;
