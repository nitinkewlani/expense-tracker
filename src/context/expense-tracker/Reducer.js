import { CHANGE_INPUT, ADD_TRANSACTION, REMOVE_TRANSACTION } from "./Constants";

export const INITIAL_STATE = {
  text: "",
  amount: "",
  transactions: [],
};

export const ExpenseTrackerReducer = (state = INITIAL_STATE, action = {}) => {
  const { transactions = [] } = { ...state };
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, ...action.payload };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [{ ...action.payload }, ...transactions],
      };
    case REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: transactions.slice(0, transactions.length - 1),
      };
    default:
      return { ...state };
  }
};
