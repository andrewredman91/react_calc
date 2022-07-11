import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    const plus = container.getByTestId('operator-add')
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button1);
    fireEvent.click(plus)
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    const subtract = container.getByTestId('operator-subtract');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const runningTotal = container.getByTestId('running-total');
    const multiply = container.getByTestId('operator-multiply');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    const divide = container.getByTestId('operator-divide');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () =>{
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('217');
  })

  it('should chain multiple operations together', () =>{
    const button3 = container.getByTestId('number3');
    const button6 = container.getByTestId('number6');
    const button2 = container.getByTestId('number2');
    const plus = container.getByTestId('operator-add');
    const subtract = container.getByTestId('operator-subtract');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(plus);
    fireEvent.click(button6);
    fireEvent.click(subtract);
    fireEvent.click(button2);
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('7');
  })

  it('clear the running total without affecting the calculation', () => {
    const button3 = container.getByTestId('number3');
    const runningTotal = container.getByTestId('running-total');
    const clear = container.getByTestId('clear');
    fireEvent.click(button3);
    fireEvent.click(clear);
    expect(runningTotal.textContent).toEqual('0'); 
  })
  
})

