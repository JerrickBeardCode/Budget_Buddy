import React from 'react';

const TransactionList = ({ items_arr }) => {
  console.log(`Inside TransactionList...`);
  console.log(items_arr);
  return (
    <div className="transactions-container">
      <ul className="transactions">
        {items_arr.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
