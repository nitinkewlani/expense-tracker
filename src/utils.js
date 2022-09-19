export const getIncomeExpense = (income = 0, expense = 0) => [
  {
    className: 'incomeContainer',
    title: 'INCOME',
    value: `+$${income?.toFixed(2) || 0}`,
  },
  {
    className: 'expenseContainer',
    title: 'EXPENSE',
    value: `-$${Math.abs(expense)?.toFixed(2) || 0}`,
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
    type: 'number',
    displayText: 'Amount',
    displaySubText: '(negative - expense, positive - income)',
  },
];

export const isAddTransactionDisabled = (text = '', amount = '') => {
  return !(text && amount);
};

export const getClassString = (amount = '', showDeleteIcon = false) => {
  const modifiedAmount = displayAmount(amount);
  let className = '';
  if (+modifiedAmount === 0) className = 'historyCardContainerNull';
  else if (modifiedAmount.startsWith('-'))
    className = 'historyCardContainerExpense';
  else if (modifiedAmount.startsWith('+'))
    className = 'historyCardContainerIncome';
  if (showDeleteIcon) {
    className += ` deleteIconPresent`;
  }
  return className;
};

export const displayAmount = (amount = '') => {
  if (+amount === 0) {
    return `${(+amount).toFixed(2)}`;
  } else if (amount.startsWith('+') || amount.startsWith('-')) {
    return `${amount[0]}${(+amount.substring(1)).toFixed(2)}`;
  } else {
    if (+amount % 1 === 0) return `+${(+amount).toFixed(2)}`;
    return `+${(+amount).toFixed(2)}`;
  }
};

export const calculateBalance = (transactions = []) => {
  const resultBalance = transactions.reduce(
    (accumulator, { amount: balance = '' }) =>
      (accumulator += +balance || 0 ? +balance : 0),
    0
  );

  return resultBalance >= 0
    ? `$${resultBalance.toFixed(2)}`
    : `-$${Math.abs(resultBalance.toFixed(2))}`;
};

export const calculateIncome = (transactions = []) =>
  transactions.reduce(
    (accumulator, { amount = '' }) =>
      (accumulator += (+amount || 0) >= 0 ? +amount : 0),
    0
  );

export const calculateExpense = (transactions = []) =>
  transactions.reduce(
    (accumulator, { amount = '' }) =>
      (accumulator += (+amount || 0) <= 0 ? +amount : 0),
    0
  );
