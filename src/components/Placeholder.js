import React from "react";

function Placeholder(props) {
  const { text = "" } = { ...props };
  return <div className="placeholder">{text}</div>;
}

export default Placeholder;
