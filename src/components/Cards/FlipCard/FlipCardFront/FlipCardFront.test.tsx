import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  FLIP_CARD_FRONT_DESCRIPTION_TEST_ID,
  FLIP_CARD_FRONT_HEADER_TEST_ID,
  ICON_COMPONENT_TEST_ID,
  LABEL_COMPONENT_TEST_ID,
  SIMPLE_CARD_TEST_ID,
  UNDERLINED_TEXT_TEST_ID,
} from '@/lib/testIDs';

import FlipCardFront from './FlipCardFront';

jest.mock('@/components/Icon', () => ({
  Icon: ({ iconURL }: { iconURL: string }) => (
    <div data-testid={ICON_COMPONENT_TEST_ID}>{iconURL}</div>
  ),
}));

jest.mock('@/components/Label', () => ({
  Label: ({ children }: { children: string }) => (
    <div data-testid={LABEL_COMPONENT_TEST_ID}>{children}</div>
  ),
}));

jest.mock('@/components/UnderlinedText', () => ({
  UnderlinedText: ({ children }: { children: string }) => (
    <div data-testid={UNDERLINED_TEXT_TEST_ID}>{children}</div>
  ),
}));

describe('FlipCardFront component', () => {
  const defaultProps = {
    iconURL: '/test-icon.svg',
    header: 'Test Header',
    label: 'Test Label',
    description: 'Test Description',
    callToAction: 'Test CTA',
  };

  it('renders the FlipCardFront component', () => {
    const { asFragment } = render(<FlipCardFront {...defaultProps} />);
    expect(screen.getByTestId(SIMPLE_CARD_TEST_ID)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the icon correctly', () => {
    const { asFragment } = render(<FlipCardFront {...defaultProps} />);
    expect(screen.getByTestId(ICON_COMPONENT_TEST_ID)).toHaveTextContent(
      '/test-icon.svg',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the header correctly', () => {
    const { asFragment } = render(<FlipCardFront {...defaultProps} />);
    expect(
      screen.getByTestId(FLIP_CARD_FRONT_HEADER_TEST_ID),
    ).toHaveTextContent('Test Header');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the label correctly', () => {
    const { asFragment } = render(<FlipCardFront {...defaultProps} />);
    expect(screen.getByTestId(LABEL_COMPONENT_TEST_ID)).toHaveTextContent(
      'Test Label',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the description correctly', () => {
    const { asFragment } = render(<FlipCardFront {...defaultProps} />);
    expect(
      screen.getByTestId(FLIP_CARD_FRONT_DESCRIPTION_TEST_ID),
    ).toHaveTextContent('Test Description');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the call to action correctly', () => {
    const { asFragment } = render(<FlipCardFront {...defaultProps} />);
    expect(screen.getByTestId(UNDERLINED_TEXT_TEST_ID)).toHaveTextContent(
      'Test CTA',
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
