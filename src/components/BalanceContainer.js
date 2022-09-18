import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../context';

const BalanceContainer = () => {
  const { transactions = [] } = useContext(ExpenseTrackerContext);

  const balance = transactions.reduce(
    (accumulator, { amount: balance = '' }) =>
      (accumulator += (+balance || 0) > 0 ? +balance : 0),
    0
  );

  return (
    <div className="myBalanceContainer">
      <div className="myBalanceText">Your Balance</div>
      <div className="myBalance">${balance}</div>
    </div>
  );
};

export default BalanceContainer;
