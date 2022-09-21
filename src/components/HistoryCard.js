import React, { useContext } from "react";
import Button from "./Button";
import { getClassString, displayAmount } from "../utils";
import { ExpenseTrackerContext } from "../context";
import { REMOVE_BUTTON_TEXT } from "../strings";
import "../style.css";

const HistoryCard = React.forwardRef((props, ref) => {
  const { text = "", amount = "", showDeleteIcon = false } = { ...props };
  const { handleRemoveTransaction = () => {} } = useContext(ExpenseTrackerContext);
  const className = getClassString(amount, showDeleteIcon);
  const displayAmountValue = displayAmount(amount);

  return (
    <div className={className} ref={ref}>
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
});

export default HistoryCard;
