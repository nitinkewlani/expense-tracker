import React, { useContext } from 'react';
import {
  getIncomeExpense,
  calculateIncome,
  calculateExpense,
} from '../utils.js';
import { ExpenseTrackerContext } from '../context';
import '../style.css';

const IncomeExpenseContainer = () => {
  const { transactions = [] } = useContext(ExpenseTrackerContext);
  const income = calculateIncome(transactions);
  const expense = calculateExpense(transactions);

  return (
    <div className="incomeExpenseContainer">
      {getIncomeExpense(income, expense).map(
        ({ className = '', title = '', value = 0 }, index) => (
          <div key={`${title}_${index}`} className={className}>
            <div>{title}</div>
            <div title={`${title}: ${value}`}>{value}</div>
          </div>
        )
      )}
    </div>
  );
};

export default IncomeExpenseContainer;
