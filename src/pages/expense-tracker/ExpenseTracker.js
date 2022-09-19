import React from 'react';
import {
  BalanceContainer,
  IncomeExpenseContainer,
  HistoryList,
  AddTransaction,
} from '../../components';
import { EXPENSE_TRACKER } from '../../strings.js';
import '../../style.css';

const ExpenseTracker = () => {
  return (
    <div className="expenseTrackerContainer">
      <div className="expenseTrackerHeader">{EXPENSE_TRACKER}</div>
      <BalanceContainer />
      <IncomeExpenseContainer />
      <HistoryList />
      <AddTransaction />
    </div>
  );
};

export default ExpenseTracker;
