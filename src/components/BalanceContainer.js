import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../context';
import { calculateBalance } from '../utils';
import { YOUR_BALANCE } from '../strings';

const BalanceContainer = () => {
  const { transactions = [] } = useContext(ExpenseTrackerContext);
  const balance = calculateBalance(transactions);

  return (
    <div className="myBalanceContainer">
      <div className="myBalanceText">{YOUR_BALANCE}</div>
      <div className="myBalance">{balance}</div>
    </div>
  );
};

export default BalanceContainer;
