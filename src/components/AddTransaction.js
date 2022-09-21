import React, { useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import { AddTransactionFields, isAddTransactionDisabled } from "../utils";
import { ADD_NEW_TRANSACTION, ADD_TRANSACTION } from "../strings";
import { ExpenseTrackerContext } from "../context";

function AddTransaction() {
  const {
    text = "",
    amount = "",
    handleInput = () => {},
    handleAddTransaction = () => {},
  } = useContext(ExpenseTrackerContext);

  const inputState = {
    text,
    amount,
  };

  const isButtonDisabled = isAddTransactionDisabled(text, amount);

  return (
    <form className="addTransactionContainer">
      <div className="addTransactionHeader">{ADD_NEW_TRANSACTION}</div>
      <div className="textAmountContainer">
        {AddTransactionFields.map(
          (
            {
              name = "",
              value = "",
              placeholder = "",
              type = "",
              displayText = "",
              displaySubText = "",
            },
            index,
          ) => (
            <div className="inputContainer" key={`${name}_${value}_${index + 1}`}>
              <div className="displayTextContainer">
                <div>{displayText}</div>
                <div>{displaySubText}</div>
              </div>
              <Input
                name={name}
                placeholder={placeholder}
                value={inputState[name] || value}
                type={type}
                onChange={handleInput}
              />
            </div>
          ),
        )}
      </div>
      <Button disabled={isButtonDisabled} onClick={handleAddTransaction} type="submit">
        {ADD_TRANSACTION}
      </Button>
    </form>
  );
}
export default AddTransaction;
