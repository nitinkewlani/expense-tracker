import { fireEvent, render } from "@testing-library/react";
import App from "App";

window.confirm = jest.fn(() => true);

const getComponent = () => render(<App />);

describe("Expense Tracker test cases", () => {
  it("should render expense-tracker and perform-operations", () => {
    const { getByText } = getComponent();
    const addTransactionCTA = getByText("Add transaction");
    expect(addTransactionCTA).toBeDisabled();
    const textInputField = getByText("Text");
    const amountInputField = getByText("Amount");
    fireEvent.change(textInputField.parentElement.nextSibling, {
      target: { value: "random text" },
    });
    fireEvent.change(amountInputField.parentElement.nextSibling, { target: { value: "123" } });
    fireEvent.click(addTransactionCTA);
    fireEvent.change(textInputField.parentElement.nextSibling, {
      target: { value: "2 random text" },
    });
    fireEvent.change(amountInputField.parentElement.nextSibling, { target: { value: "-223" } });
    fireEvent.click(addTransactionCTA);
    fireEvent.change(textInputField.parentElement.nextSibling, {
      target: { value: "3 random text 3" },
    });
    fireEvent.change(amountInputField.parentElement.nextSibling, { target: { value: "+269" } });
    fireEvent.click(addTransactionCTA);
    fireEvent.change(textInputField.parentElement.nextSibling, {
      target: { value: "4 random text 4" },
    });
    fireEvent.change(amountInputField.parentElement.nextSibling, { target: { value: "65" } });
    fireEvent.click(addTransactionCTA);
    fireEvent.change(textInputField.parentElement.nextSibling, {
      target: { value: "5 random text 5" },
    });
    fireEvent.change(amountInputField.parentElement.nextSibling, { target: { value: "+98" } });
    fireEvent.click(addTransactionCTA);
    const textValueElement = getByText("random text", { exact: true });
    const amountValueElement = getByText("+123.00");
    expect(textValueElement.title).toBe("random text");
    expect(amountValueElement.title).toBe("+123.00");
    const removeTransactionCTA = getByText("X");
    fireEvent.click(removeTransactionCTA);
    expect(window.confirm).toBeCalled();
  });
});
