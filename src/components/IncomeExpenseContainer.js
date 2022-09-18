import React, { useContext } from 'react';
import { getIncomeExpense } from '../utils.js';
import { ExpenseTrackerContext } from '../context';
import '../style.css';

const IncomeExpenseContainer = () => {
  const { transactions = [] } = useContext(ExpenseTrackerContext);
  const income = transactions.reduce(
    (accumulator, { amount = '' }) =>
      (accumulator += (+amount || 0) >= 0 ? +amount : 0),
    0
  );
  const expense = transactions.reduce(
    (accumulator, { amount = '' }) =>
      (accumulator += (+amount || 0) <= 0 ? +amount : 0),
    0
  );

  return (
    <div className="incomeExpenseContainer">
      {getIncomeExpense(income, expense).map(
        ({ className = '', title = '', value = 0 }) => (
          <div className={className}>
            <div>{title}</div>
            <div>{value}</div>
          </div>
        )
      )}
    </div>
  );
};

export default IncomeExpenseContainer;
