import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import {
  FLIP_CARD_BACK_TEST_ID,
  FLIP_CARD_FRONT_TEST_ID,
  FLIP_CARD_TEST_ID,
} from '@/lib/testIDs';

import FlipCard from './FlipCard';

describe('FlipCard component', () => {
  const defaultProps = {
    front: <div>Front Side</div>,
    back: <div>Back Side</div>,
  };

  it('renders the FlipCard component', () => {
    const { asFragment } = render(<FlipCard {...defaultProps} />);
    expect(screen.getByTestId(FLIP_CARD_TEST_ID)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the front side content', () => {
    render(<FlipCard {...defaultProps} />);
    const frontElement = screen.getByTestId(FLIP_CARD_FRONT_TEST_ID);

    expect(frontElement).toBeInTheDocument();
    expect(frontElement).toHaveTextContent('Front Side');
  });

  it('renders the back side content', () => {
    render(<FlipCard {...defaultProps} />);
    const backElement = screen.getByTestId(FLIP_CARD_BACK_TEST_ID);

    expect(backElement).toBeInTheDocument();
    expect(backElement).toHaveTextContent('Back Side');
  });

  it('toggles class on click (flips the card)', () => {
    render(<FlipCard {...defaultProps} />);
    const wrapper = screen.getByTestId(FLIP_CARD_TEST_ID);
    const inner = wrapper.firstChild as HTMLElement;

    expect(inner).not.toHaveClass('[transform:rotateX(-180deg)]');

    fireEvent.click(wrapper);
    expect(inner).toHaveClass('[transform:rotateX(-180deg)]');

    fireEvent.click(wrapper);
    expect(inner).not.toHaveClass('[transform:rotateX(-180deg)]');
  });
});
