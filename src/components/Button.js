import React from 'react';
import { DEFAULT_BUTTON_TEXT } from '../strings';

const Button = (props) => {
  const { children = DEFAULT_BUTTON_TEXT } = { ...props };
  return <button {...props}>{children}</button>;
};

export default Button;
