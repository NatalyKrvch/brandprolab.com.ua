import '@testing-library/jest-dom';

jest.mock('@/sanity/lib/client', () => ({
  client: {
    fetch: jest.fn().mockResolvedValue({}),
  },
}));

jest.mock('@sanity/client', () => ({
  createClient: () => ({
    fetch: jest.fn().mockResolvedValue({}),
  }),
}));

import { fireEvent, render, screen } from '@testing-library/react';

import { PAGINATION_DOT_TEST_ID } from '@/lib/testIDs';

import PaginationDots from './PaginationDots';

beforeAll(() => {
  Object.defineProperty(global, 'crypto', {
    value: {
      randomUUID: () => 'mocked-uuid',
    },
  });
});

describe('PaginationDots component', () => {
  const defaultProps = {
    amount: 5,
    current: 2,
    onDotClick: jest.fn(),
  };

  beforeEach(() => {
    defaultProps.onDotClick.mockClear();
  });

  it('renders the correct number of dots', () => {
    const { asFragment } = render(<PaginationDots {...defaultProps} />);
    const dots = screen.getAllByTestId(id =>
      id.startsWith(PAGINATION_DOT_TEST_ID),
    );

    expect(dots).toHaveLength(defaultProps.amount);
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies active class to the current dot', () => {
    const { asFragment } = render(<PaginationDots {...defaultProps} />);
    const activeDot = screen.getByTestId(
      `${PAGINATION_DOT_TEST_ID}-${defaultProps.current}`,
    );

    expect(activeDot).toHaveClass('bg-teal-dark');
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies inactive classes to other dots', () => {
    const { asFragment } = render(<PaginationDots {...defaultProps} />);
    const inactiveDot = screen.getByTestId(`${PAGINATION_DOT_TEST_ID}-0`);

    expect(inactiveDot).toHaveClass(
      'border',
      'border-teal-dark',
      'bg-gray-light',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onDotClick with correct index', () => {
    const { asFragment } = render(<PaginationDots {...defaultProps} />);
    const targetIndex = 4;

    const targetDot = screen.getByTestId(
      `${PAGINATION_DOT_TEST_ID}-${targetIndex}`,
    );
    fireEvent.click(targetDot);

    expect(defaultProps.onDotClick).toHaveBeenCalledWith(targetIndex);
    expect(asFragment()).toMatchSnapshot();
  });
});
