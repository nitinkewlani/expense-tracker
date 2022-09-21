import React from "react";
import { DEFAULT_BUTTON_TEXT } from "../strings";

function Button(props) {
  const {
    children = DEFAULT_BUTTON_TEXT,
    disabled = false,
    onClick = () => {},
    className = "",
    type = "button",
  } = { ...props };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
      className={className}>
      {children}
    </button>
  );
}

export default Button;
