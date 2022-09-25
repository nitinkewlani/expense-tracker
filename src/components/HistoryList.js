import React, { useContext, useEffect, useRef } from "react";
import "../style.css";
import HistoryCard from "./HistoryCard";
import Placeholder from "./Placeholder";
import { ExpenseTrackerContext } from "../context";
import { HISTORY_TEXT, NO_HISTORY } from "../strings";

function HistoryList() {
  const { transactions = [] } = useContext(ExpenseTrackerContext);
  const lastElementRef = useRef(null);

  useEffect(() => {
    if (transactions.length > 4) {
      if (lastElementRef)
        lastElementRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
    }
  }, [transactions.length]);

  return (
    <div className="historyListContainer">
      <div className="historyListHeader">{HISTORY_TEXT}</div>
      {transactions.length > 0 ? (
        <div className="historyList">
          {transactions.map(({ amount = "", text = "" }, index) => (
            <HistoryCard
              key={`${text}_${amount}_${index + 1}`}
              text={text}
              amount={amount}
              showDeleteIcon={index === transactions.length - 1}
              ref={lastElementRef}
            />
          ))}
        </div>
      ) : (
        <Placeholder text={NO_HISTORY} />
      )}
    </div>
  );
}

export default HistoryList;
