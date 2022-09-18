import React, { useContext } from 'react';
import Input from './Input';
import Button from './Button';
import { AddTransactionFields, isAddTransactionDisabled } from '../utils.js';
import { ADD_NEW_TRANSACTION, ADD_TRANSACTION } from '../strings.js';
import { ExpenseTrackerContext } from '../context';

const AddTransaction = () => {
  const {
    text = '',
    amount = '',
    handleInput = () => {},
    handleAddTransaction = () => {},
  } = useContext(ExpenseTrackerContext);

  const inputState = {
    text,
    amount,
  };

  return (
    <div className="addTransactionContainer">
      <div className="addTransactionHeader">{ADD_NEW_TRANSACTION}</div>
      <div className="textAmountContainer">
        {AddTransactionFields.map(
          ({
            name = '',
            value = '',
            placeholder = `Enter ${name} here`,
            type = 'text',
            displayText = '',
            displaySubText = '',
          }) => (
            <div className="inputContainer">
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
                autoComplete="off"
              />
            </div>
          )
        )}
      </div>
      <Button
        disabled={isAddTransactionDisabled(text, amount)}
        isAddTransactionDisabledbuttonText={ADD_TRANSACTION}
        onClick={handleAddTransaction}
      />
    </div>
  );
};
export default AddTransaction;
