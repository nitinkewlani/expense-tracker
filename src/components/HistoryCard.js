import React, { useContext } from 'react';
import Button from './Button';
import { getClassString, displayAmount } from '../utils.js';
import { ExpenseTrackerContext } from '../context';
import { REMOVE_BUTTON_TEXT } from '../strings';
import '../style.css';

const HistoryCard = ({ text = '', amount = '', showDeleteIcon = false }) => {
  const { handleRemoveTransaction = () => {} } = useContext(
    ExpenseTrackerContext
  );
  const className = getClassString(amount, showDeleteIcon);
  const displayAmountValue = displayAmount(amount);

  return (
    <div className={className}>
      {showDeleteIcon && (
        <Button onClick={handleRemoveTransaction} className="deleteIcon">
          {REMOVE_BUTTON_TEXT}
        </Button>
      )}
      <div className="historyText" title={text}>
        {text}
      </div>
      <div className="historyValue" title={displayAmountValue}>
        {displayAmountValue}
      </div>
    </div>
  );
};

export default HistoryCard;
