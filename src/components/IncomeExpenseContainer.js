import React, { useContext } from "react";
import { getIncomeExpense, calculateIncome, calculateExpense } from "../utils";
import { ExpenseTrackerContext } from "../context";
import "../style.css";

function IncomeExpenseContainer() {
  const { transactions = [] } = useContext(ExpenseTrackerContext);
  const income = calculateIncome(transactions);
  const expense = calculateExpense(transactions);

  return (
    <div className="incomeExpenseContainer">
      {getIncomeExpense(income, expense).map(({ className = "", title = "", value = 0 }, index) => (
        <div key={`${title}_${index + 1}`} className={className}>
          <div>{title}</div>
          <div title={`${title}: ${value}`}>{value}</div>
        </div>
      ))}
    </div>
  );
}

export default IncomeExpenseContainer;
