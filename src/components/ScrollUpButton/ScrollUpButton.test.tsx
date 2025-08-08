import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { SCROLL_UP_BUTTON_TEST_ID } from '@/lib/testIDs';

import ScrollUpButton from './ScrollUpButton';

jest.mock('./hooks/useScrollUpButton', () => ({
  useScrollUpButton: jest.fn(),
}));

jest.mock('@/utils/scrollToSectionById', () => ({
  scrollToSectionById: jest.fn(),
}));

const mockUseScrollUpButton = require('./hooks/useScrollUpButton')
  .useScrollUpButton as jest.Mock;
const mockScrollUtils = require('@/utils/scrollToSectionById');
const mockScrollToSectionById =
  mockScrollUtils.scrollToSectionById as jest.Mock;

describe('ScrollUpButton component', () => {
  const sectionId = 'hero';
  const scrollThreshold = 1000;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not render if component is not mounted', () => {
    mockUseScrollUpButton.mockReturnValue({
      isVisible: false,
      hasMounted: false,
    });

    const { asFragment } = render(
      <ScrollUpButton
        sectionId={sectionId}
        scrollThreshold={scrollThreshold}
      />,
    );

    expect(
      screen.queryByTestId(SCROLL_UP_BUTTON_TEST_ID),
    ).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render but be hidden when isVisible = false', () => {
    mockUseScrollUpButton.mockReturnValue({
      isVisible: false,
      hasMounted: true,
    });

    const { asFragment } = render(
      <ScrollUpButton
        sectionId={sectionId}
        scrollThreshold={scrollThreshold}
      />,
    );

    const button = screen.getByTestId(SCROLL_UP_BUTTON_TEST_ID);
    expect(button).toHaveClass('pointer-events-none translate-y-4 opacity-0');
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render and be visible when isVisible = true', () => {
    mockUseScrollUpButton.mockReturnValue({
      isVisible: true,
      hasMounted: true,
    });

    const { asFragment } = render(
      <ScrollUpButton
        sectionId={sectionId}
        scrollThreshold={scrollThreshold}
      />,
    );

    const button = screen.getByTestId(SCROLL_UP_BUTTON_TEST_ID);
    expect(button).toHaveClass('translate-y-0 opacity-100');
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call scrollToSectionById on click', () => {
    mockUseScrollUpButton.mockReturnValue({
      isVisible: true,
      hasMounted: true,
    });

    const { asFragment } = render(
      <ScrollUpButton
        sectionId={sectionId}
        scrollThreshold={scrollThreshold}
      />,
    );

    fireEvent.click(screen.getByTestId(SCROLL_UP_BUTTON_TEST_ID));

    expect(mockScrollToSectionById).toHaveBeenCalledWith(sectionId);
    expect(mockScrollToSectionById).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
