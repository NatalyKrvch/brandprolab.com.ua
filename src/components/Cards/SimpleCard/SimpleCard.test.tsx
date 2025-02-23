import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { SIMPLE_CARD_TEST_ID } from '@/lib/testIDs';

import SimpleCard from './SimpleCard';

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

  it('applies background image styles when backgroundImage is provided', () => {
    const backgroundImage = '/test-image.jpg';
    const { asFragment } = render(
      <SimpleCard {...defaultProps} backgroundImageUrl={backgroundImage} />,
    );
    const cardElement = screen.getByTestId(SIMPLE_CARD_TEST_ID);

    expect(cardElement).toHaveStyle(
      `background-image: url(${backgroundImage})`,
    );
    expect(cardElement).toHaveClass('bg-cover', 'bg-center');
    expect(asFragment()).toMatchSnapshot();
  });
});
