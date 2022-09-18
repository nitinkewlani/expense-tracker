export const getIncomeExpense = (income = 0, expense = 0) => [
  {
    className: 'incomeContainer',
    title: 'INCOME',
    value: `+$${income?.toFixed(2) || 0}`,
  },
  {
    className: 'expenseContainer',
    title: 'EXPENSE',
    value: `-$${expense?.toFixed(2) || 0}`,
  },
];

export const AddTransactionFields = [
  {
    name: 'text',
    placeholder: 'Enter text...',
    value: '',
    type: 'text',
    displayText: 'Text',
  },
  {
    name: 'amount',
    placeholder: '0',
    value: '',
    type: 'text',
    displayText: 'Amount',
    displaySubText: '(negative - expense, positive - income)',
  },
];

export const isAddTransactionDisabled = (text = '', amount = '') => {
  return !(text && !['0', ''].includes(amount.trim()));
};

export const getClassString = (amount = '', showDeleteIcon = false) => {
  let className = amount.includes('-')
    ? 'historyCardContainerExpense'
    : 'historyCardContainerIncome';

  if (showDeleteIcon) {
    className += ` deleteIconPresent`;
  }
  return className;
};
