import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { BUTTON_TEST_ID } from '@/lib/testIDs';

import Button from './Button';

describe('Button component', () => {
  const defaultProps = {
    children: 'Click me',
    onClick: jest.fn(),
    color: 'teal' as const,
  };

  it('renders the Button component', () => {
    const { asFragment } = render(<Button {...defaultProps} />);
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID);

    expect(buttonElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct children', () => {
    const { asFragment } = render(<Button {...defaultProps} />);
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID);

    expect(buttonElement).toHaveTextContent('Click me');
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies correct styles for teal color', () => {
    const { asFragment } = render(<Button {...defaultProps} color="teal" />);
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID);

    expect(buttonElement).toHaveClass(
      'bg-teal-dark',
      'text-white',
      'hover:outline-8',
      'hover:outline-teal-darkTranslucent',
      'active:bg-black',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies correct styles for white color', () => {
    const { asFragment } = render(<Button {...defaultProps} color="white" />);
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID);

    expect(buttonElement).toHaveClass(
      'bg-white',
      'text-blue-default',
      'hover:outline-8',
      'hover:outline-whiteOpacity',
      'active:bg-teal-light',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('triggers onClick when clicked', () => {
    const { asFragment } = render(<Button {...defaultProps} />);
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID);

    fireEvent.click(buttonElement);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
