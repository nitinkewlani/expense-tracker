import React, { useContext } from 'react';
import {
  BalanceContainer,
  IncomeExpenseContainer,
  HistoryList,
  AddTransaction,
} from '../../components';
import { ExpenseTrackerProvider } from '../../context';
import { EXPENSE_TRACKER } from '../../strings.js';
import '../../style.css';

const ExpenseTracker = () => {
  return (
    // <ExpenseTrackerProvider>
    <div className="expenseTrackerContainer">
      <div className="expenseTrackerHeader">{EXPENSE_TRACKER}</div>
      <BalanceContainer />
      <IncomeExpenseContainer />
      <HistoryList />
      <AddTransaction />
    </div>
    // </ExpenseTrackerProvider>
  );
};

export default ExpenseTracker;
