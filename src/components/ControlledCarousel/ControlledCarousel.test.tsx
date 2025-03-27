import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import ControlledCarousel from './ControlledCarousel';

jest.mock('./hooks/useControlledCarousel', () => ({
  useControlledCarousel: () => ({
    sliderRef: jest.fn(),
    currentSlideIndex: 0,
    isFirstSlide: true,
    isLastSlide: false,
    handleNextSlide: jest.fn(),
    handlePreviousSlide: jest.fn(),
    goToSlide: jest.fn(),
  }),
}));

jest.mock('../CarouselNavButtons', () => ({
  CarouselNavButtons: () => (
    <div data-testid="carousel-nav-buttons-mock">Mocked Nav Buttons</div>
  ),
}));

jest.mock('../PaginationDots', () => ({
  PaginationDots: () => (
    <div data-testid="pagination-dots-mock">Mocked Pagination Dots</div>
  ),
}));

beforeAll(() => {
  Object.defineProperty(global, 'crypto', {
    value: {
      randomUUID: () => 'mocked-uuid',
    },
  });
});

describe('ControlledCarousel', () => {
  it('renders children as slides', () => {
    render(
      <ControlledCarousel>
        <div data-testid="child-1">Slide 1</div>
        <div data-testid="child-2">Slide 2</div>
      </ControlledCarousel>,
    );

    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-nav-buttons-mock')).toBeInTheDocument();
    expect(screen.getByTestId('pagination-dots-mock')).toBeInTheDocument();
  });
});
