import React from 'react';

const Button = (props) => {
  const { buttonText = 'Button' } = { ...props };
  return <button {...props}>{buttonText}</button>;
};

export default Button;
