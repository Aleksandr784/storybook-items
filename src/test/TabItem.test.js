import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {TabItem} from "../Tabs/TabItem";
import React from 'react';



test('Text change after button click', () => {
    render(<TabItem text="Button click" />);
    const buttonElement = screen.getByText(/Button click/i);
    expect(buttonElement).toBeInTheDocument();
    const text=screen.getByText("button not clicked");
    expect(text).toBeInTheDocument();

 
 
  userEvent.click(screen.getByText('Button click'))
  const textChanged = screen.getByText("button clicked")
  expect(textChanged).toBeInTheDocument();

  
});