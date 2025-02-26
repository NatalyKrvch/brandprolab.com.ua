import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  FLIP_CARD_BACK_TEST_ID,
  FLIP_CARD_FRONT_TEST_ID,
  FLIP_CARD_TEST_ID,
} from '@/lib/testIDs';

import FlipCard from './FlipCard';

describe('FlipCard component', () => {
  const defaultProps = {
    front: 'Front Side',
    back: 'Back Side',
  };

  it('renders the FlipCard component', () => {
    const { asFragment } = render(<FlipCard {...defaultProps} />);
    const cardElement = screen.getByTestId(FLIP_CARD_TEST_ID);

    expect(cardElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the front side content', () => {
    const { asFragment } = render(<FlipCard {...defaultProps} />);
    const frontElement = screen.getByTestId(FLIP_CARD_FRONT_TEST_ID);

    expect(frontElement).toBeInTheDocument();
    expect(frontElement).toHaveTextContent('Front Side');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the back side content', () => {
    const { asFragment } = render(<FlipCard {...defaultProps} />);
    const backElement = screen.getByTestId(FLIP_CARD_BACK_TEST_ID);

    expect(backElement).toBeInTheDocument();
    expect(backElement).toHaveTextContent('Back Side');
    expect(asFragment()).toMatchSnapshot();
  });
});
