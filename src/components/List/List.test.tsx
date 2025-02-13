import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { LIST_ITEM_TEST_ID, LIST_TEST_ID } from '@/lib/testIDs';

import List from './List';

jest.mock('next/image', () => {
  const MockImage = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  );
  MockImage.displayName = 'MockImage';
  return MockImage;
});

describe('List component', () => {
  const defaultProps = {
    list: ['Item 1', 'Item 2', 'Item 3'],
  };

  it('renders the List component', () => {
    const { asFragment } = render(<List {...defaultProps} />);
    const listElement = screen.getByTestId(LIST_TEST_ID);

    expect(listElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct number of list items', () => {
    const { asFragment } = render(<List {...defaultProps} />);
    const listItems = screen.getAllByTestId(LIST_ITEM_TEST_ID);

    expect(listItems).toHaveLength(defaultProps.list.length);
    expect(asFragment()).toMatchSnapshot();

    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(defaultProps.list[index]);
    });
  });

  it('renders checkmark images for each list item', () => {
    const { asFragment } = render(<List {...defaultProps} />);
    const listItems = screen.getAllByTestId(LIST_ITEM_TEST_ID);

    listItems.forEach(item => {
      const imageElement = item.querySelector('img');
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', '/icons/cards/check.svg');
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
