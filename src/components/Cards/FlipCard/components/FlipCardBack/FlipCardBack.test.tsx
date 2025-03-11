import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  FLIP_CARD_BACK_HEADER_TEST_ID,
  FLIP_CARD_BACK_LIST_ITEM_TEST_ID,
  FLIP_CARD_BACK_LIST_TEST_ID,
  SIMPLE_CARD_TEST_ID,
} from '@/lib/testIDs';

import FlipCardBack from './FlipCardBack';

describe('FlipCardBack component', () => {
  const defaultProps = {
    header: 'Test Header',
    list: ['Item 1', 'Item 2', 'Item 3'],
  };

  it('renders the FlipCardBack component', () => {
    const { asFragment } = render(<FlipCardBack {...defaultProps} />);
    expect(screen.getByTestId(SIMPLE_CARD_TEST_ID)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the header correctly', () => {
    const { asFragment } = render(<FlipCardBack {...defaultProps} />);
    expect(screen.getByTestId(FLIP_CARD_BACK_HEADER_TEST_ID)).toHaveTextContent(
      'Test Header',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the list correctly', () => {
    const { asFragment } = render(<FlipCardBack {...defaultProps} />);
    expect(screen.getByTestId(FLIP_CARD_BACK_LIST_TEST_ID)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct number of list items', () => {
    const { asFragment } = render(<FlipCardBack {...defaultProps} />);
    const listItems = screen.getAllByTestId(FLIP_CARD_BACK_LIST_ITEM_TEST_ID);

    expect(listItems).toHaveLength(defaultProps.list.length);
    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(defaultProps.list[index]);
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
