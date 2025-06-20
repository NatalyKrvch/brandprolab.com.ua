import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  ICON_COMPONENT_TEST_ID,
  LABEL_COMPONENT_TEST_ID,
  SERVICE_CARD_FRONT_DESCRIPTION_TEST_ID,
  SERVICE_CARD_FRONT_HEADER_TEST_ID,
  SIMPLE_CARD_TEST_ID,
  UNDERLINED_TEXT_TEST_ID,
} from '@/lib/testIDs';

import ServiceCardFront from './ServiceCardFront';

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

describe('ServiceCardFront component', () => {
  const defaultProps = {
    iconURL: '/test-icon.svg',
    header: 'Test Header',
    label: 'Test Label',
    description: 'Test Description',
    callToActionText: 'Test CTA',
    whiteIconURL: '/test-white-icon.svg',
    backgroundImageUrl: '/test-background-image.jpg',
  };

  it('renders correctly with default variant (no background image)', () => {
    render(<ServiceCardFront {...defaultProps} variant="default" />);
    expect(screen.getByTestId(SIMPLE_CARD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(LABEL_COMPONENT_TEST_ID)).toHaveTextContent(
      'Test Label',
    );
    expect(
      screen.getByTestId(SERVICE_CARD_FRONT_HEADER_TEST_ID),
    ).toHaveTextContent('Test Header');
    expect(
      screen.getByTestId(SERVICE_CARD_FRONT_DESCRIPTION_TEST_ID),
    ).toHaveTextContent('Test Description');
    expect(screen.getByTestId(UNDERLINED_TEXT_TEST_ID)).toHaveTextContent(
      'Test CTA',
    );
  });

  it('renders backgroundImageUrl and opacity when variant is gradient', () => {
    const { container } = render(
      <ServiceCardFront {...defaultProps} variant="gradient" />,
    );

    const bgImageDiv = container.querySelector(
      'div[style*="background-image"]',
    );
    expect(bgImageDiv).toBeInTheDocument();
    expect(bgImageDiv?.getAttribute('style')).toContain(
      defaultProps.backgroundImageUrl,
    );
  });
});
