import React from 'react';

const TransactionList = ({ items_arr }) => {
  // TODO: reformat so that the object pairs of amount and title are printed to the screen
  console.log(`Inside TransactionList...`);

  return (
    <div className="transactions-container">
      {items_arr.map(item => {
        return (
          <p className="transaction-entry">
            <span className="transaction-amount">${item.amount}</span>
            <span className="transaction-title">{item.title}</span>
          </p>
        );
      })}
    </div>
  );
};

export default TransactionList;
