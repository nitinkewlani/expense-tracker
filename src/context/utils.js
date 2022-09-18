import { TRANSACTION_REMOVAL_CONFIRMATION, TEXT, AMOUNT } from '../strings';
import {
  REMOVE_TRANSACTION,
  ADD_TRANSACTION,
  CHANGE_INPUT,
} from './expense-tracker/Constants.js';

const inputValidation = (name = '', value = '') => {
  let isInvalid = '';
  switch (name) {
    case TEXT:
      if (!value.match(/^[a-zA-Z]*$/)) isInvalid = TEXT;
      break;
    case AMOUNT:
      if (!value.match(/^(?:([-+]))?([0-9]+$)/)) isInvalid = AMOUNT;
      break;
  }
  return isInvalid;
};

const request = (type, payload = {}) => ({
  type,
  payload,
});

export const inputHandler = (e, dispatch) => {
  const { name = '', value = '' } = e.target;
  const trimmedValue = value.trimStart();
  if (!trimmedValue) {
    dispatch(request(CHANGE_INPUT, { [name]: '' }));
    return;
  }
  const isValid = inputValidation(name, trimmedValue);
  if (isValid) {
    alert(`Invalid ${isValid}!`);
    dispatch(request(CHANGE_INPUT, { [name]: '' }));
    return;
  }
  dispatch(request(CHANGE_INPUT, { [name]: trimmedValue }));
};

export const addTransactionHandler = (state, dispatch) => {
  const { text = '', amount = '' } = { ...state };
  if (text && amount) {
    dispatch(request(ADD_TRANSACTION, { text, amount }));
    dispatch(request(CHANGE_INPUT, { text: '', amount: '' }));
  }
};

export const removeTransactionHandler = (dispatch) => {
  const isConfirmed = confirm(TRANSACTION_REMOVAL_CONFIRMATION);
  if (isConfirmed) dispatch(request(REMOVE_TRANSACTION));
};
