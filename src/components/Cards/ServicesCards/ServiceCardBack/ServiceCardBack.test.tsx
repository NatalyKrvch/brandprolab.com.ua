import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  SERVICE_CARD_BACK_HEADER_TEST_ID,
  SERVICE_CARD_BACK_LIST_ITEM_TEST_ID,
  SERVICE_CARD_BACK_LIST_TEST_ID,
  SIMPLE_CARD_TEST_ID,
} from '@/lib/testIDs';

import ServiceCardBack from './ServiceCardBack';

describe('ServiceCardBack component', () => {
  const defaultProps = {
    header: 'Test Header',
    list: ['Item 1', 'Item 2', 'Item 3'],
  };

  it('renders the ServiceCardBack component', () => {
    const { asFragment } = render(<ServiceCardBack {...defaultProps} />);
    expect(screen.getByTestId(SIMPLE_CARD_TEST_ID)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the header correctly', () => {
    const { asFragment } = render(<ServiceCardBack {...defaultProps} />);
    expect(
      screen.getByTestId(SERVICE_CARD_BACK_HEADER_TEST_ID),
    ).toHaveTextContent('Test Header');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the list correctly', () => {
    const { asFragment } = render(<ServiceCardBack {...defaultProps} />);
    expect(
      screen.getByTestId(SERVICE_CARD_BACK_LIST_TEST_ID),
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct number of list items', () => {
    const { asFragment } = render(<ServiceCardBack {...defaultProps} />);
    const listItems = screen.getAllByTestId(
      SERVICE_CARD_BACK_LIST_ITEM_TEST_ID,
    );

    expect(listItems).toHaveLength(defaultProps.list.length);
    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(defaultProps.list[index]);
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
