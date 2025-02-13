import { render, screen } from '@testing-library/react';
import SimpleCard from './SimpleCard';
import '@testing-library/jest-dom';
import { SIMPLE_CARD_TEST_ID } from '@/lib/testIDs';

describe('SimpleCard component', () => {
  const defaultProps = {
    children: <p>Test Content</p>,
    className: 'custom-class',
    backgroundColor: 'bg-gray-100',
  };

  it('renders the SimpleCard component', () => {
    const { asFragment } = render(<SimpleCard {...defaultProps} />);
    const cardElement = screen.getByTestId(SIMPLE_CARD_TEST_ID);

    expect(cardElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders children inside the card', () => {
    const { asFragment } = render(<SimpleCard {...defaultProps} />);
    const cardElement = screen.getByTestId(SIMPLE_CARD_TEST_ID);

    expect(cardElement).toHaveTextContent('Test Content');
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies correct className and backgroundColor', () => {
    const { asFragment } = render(<SimpleCard {...defaultProps} />);
    const cardElement = screen.getByTestId(SIMPLE_CARD_TEST_ID);

    expect(cardElement).toHaveClass('custom-class', 'bg-gray-100');
    expect(asFragment()).toMatchSnapshot();
  });
});
