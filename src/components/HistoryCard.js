import React, { useContext } from 'react';
import Button from './Button';
import { getClassString } from '../utils.js';
import { ExpenseTrackerContext } from '../context';
import '../style.css';

const HistoryCard = ({ text = '', amount = '', showDeleteIcon = false }) => {
  const { handleRemoveTransaction = () => {} } = useContext(
    ExpenseTrackerContext
  );

  return (
    <div className={getClassString(amount, showDeleteIcon)}>
      {showDeleteIcon && (
        <Button
          buttonText={'X'}
          className="deleteIcon"
          onClick={handleRemoveTransaction}
        />
      )}
      <div className="historyText">{text}</div>
      <div className="historyValue">{amount}</div>
    </div>
  );
};

export default HistoryCard;
