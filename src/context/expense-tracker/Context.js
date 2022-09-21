import React, { createContext, useMemo, useReducer, useCallback } from "react";
import { inputHandler, addTransactionHandler, removeTransactionHandler } from "../utils";
import { INITIAL_STATE, ExpenseTrackerReducer } from "./Reducer";

export const ExpenseTrackerContext = createContext(INITIAL_STATE);

function ExpenseTrackerProvider(props) {
  const { children = "" } = { ...props };
  const [state, dispatch] = useReducer(ExpenseTrackerReducer, INITIAL_STATE);
  const handleInput = useCallback((e) => inputHandler(e, dispatch), []);
  const handleAddTransaction = () => addTransactionHandler(state, dispatch);
  const handleRemoveTransaction = () => removeTransactionHandler(dispatch);
  const contextValue = useMemo(
    () => ({
      ...state,
      handleInput,
      handleAddTransaction,
      handleRemoveTransaction,
    }),
    [state],
  );

  return (
    <ExpenseTrackerContext.Provider value={contextValue}>{children}</ExpenseTrackerContext.Provider>
  );
}

export default ExpenseTrackerProvider;
