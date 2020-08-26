import React from 'react';
import TransactionList from './TransactionList';

const Incomes = ({ num_incomes, incomes_arr, deleteArrayItem }) => {
  // Calculate total incomes to display to screen
  const calcIncomesTotal = () => {
    let incomes_total = 0.0;
    incomes_arr.forEach(
      el => (incomes_total = incomes_total + parseFloat(el.amount))
    );

    // Round to 2 decimal places
    incomes_total = Number(
      Math.round(incomes_total + 'e' + 2) + 'e-' + 2
    ).toFixed(2);

    return <>${incomes_total}</>;
  };

  return (
    <div id="incomes-container">
      <p className="incomes-header">
        Incomes: <span className="incomes-total">{calcIncomesTotal()}</span>
      </p>

      <TransactionList
        items_arr={incomes_arr}
        type="incomes"
        deleteArrayItem={deleteArrayItem}
      />
    </div>
  );
};

export default Incomes;
