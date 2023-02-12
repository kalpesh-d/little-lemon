import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import BookingForm from './BookingForm';

describe ('Check the name format', () => {

    test('render name input', () => {
    render(<BookingForm />);
 
    const test2 = screen.getByTestId("res-name");
    expect(test2).toBeInTheDocument();
    expect(test2).toHaveAttribute("type", "name");
  });
    test("If the name is correct", () => {
        render(<BookingForm />);

        const test2 = screen.getByTestId("res-name");
        userEvent.type(test2, "John");

    expect(screen.getByTestId("res-name")).toHaveValue("John");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
    test('pass invalid name to test input value', () => {
    render(<BookingForm />);
 
    const test2 = screen.getByTestId("res-name");
    userEvent.type(test2, "34ygs");
 
    expect(screen.getByTestId("res-name")).toHaveValue("34ygs");
    expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid name.");
  });
})

describe('Check the date format', () => {

    test('render date input', () => {
    render(<BookingForm />);
 
    const test1 = screen.getByTestId("res-date");
    expect(test1).toBeInTheDocument();
    expect(test1).toHaveAttribute("type", "date");
  });

    test("If the date is incorrect", () =>{
        render(<BookingForm />);

        const test1 = screen.getByTestId("res-date");
        userEvent.type(test1, "02/10/2023");

    expect(screen.getByTestId("res-date")).toHaveValue("02/10/2023");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });

    test('pass invalid date to test input value', () => {
    render(<BookingForm />);
 
    const test1 = screen.getByTestId("res-date");
    userEvent.type(test1, "20/02/2022");
 
    expect(screen.getByTestId("res-date")).toHaveValue("20/02/2022");
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid date.");
  });
});
