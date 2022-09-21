import React from "react";

function Input(props) {
  const {
    name = "",
    placeholder = "",
    value = "",
    type = "text",
    onChange = () => {},
  } = { ...props };

  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
      autoComplete="off"
    />
  );
}

export default Input;
