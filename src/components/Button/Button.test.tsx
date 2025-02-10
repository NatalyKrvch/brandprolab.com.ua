import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';
import { BUTTON_TEST_ID } from '@/lib/testIDs';

describe('Button component', () => {
  const defaultProps = {
    children: 'Click me',
  };

  it('renders the Button component correctly', () => {
    const { asFragment } = render(<Button {...defaultProps} />);
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID);

    expect(buttonElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the correct text', () => {
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
      'hover:outline',
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
      'hover:outline',
      'active:bg-teal-light',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('passes additional props correctly', () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <Button {...defaultProps} onClick={onClick} disabled />,
    );
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID);

    expect(buttonElement).toBeDisabled();
    buttonElement.click();
    expect(onClick).not.toHaveBeenCalled();

    expect(asFragment()).toMatchSnapshot();
  });
});
