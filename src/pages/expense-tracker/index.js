import React from 'react';
import ExpenseTrackerComponent from './ExpenseTracker';
import { ExpenseTrackerProvider } from '../../context';

const ExpenseTracker = () => {
  return (
    <ExpenseTrackerProvider>
      <ExpenseTrackerComponent />
    </ExpenseTrackerProvider>
  );
};

export default ExpenseTracker;
