import React, { useContext } from 'react';
import '../style.css';
import HistoryCard from './HistoryCard';
import Placeholder from './Placeholder';
import { ExpenseTrackerContext } from '../context';
import { HISTORY_TEXT, NO_HISTORY } from '../strings.js';

const HistoryList = () => {
  const { transactions = [] } = useContext(ExpenseTrackerContext);

  return (
    <div className="historyListContainer">
      <div className="historyListHeader">{HISTORY_TEXT}</div>
      {transactions.length > 0 ? (
        <div className="historyList">
          {transactions.map(({ amount = '', text = '' }, index) => (
            <HistoryCard
              key={`${text}_${amount}_${index}`}
              text={text}
              amount={amount}
              showDeleteIcon={index === transactions.length - 1}
            />
          ))}
        </div>
      ) : (
        <Placeholder text={NO_HISTORY} />
      )}
    </div>
  );
};

export default HistoryList;
