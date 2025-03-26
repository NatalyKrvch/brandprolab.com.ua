import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import CarouselNavButtons from './CarouselNavButtons';

describe('CarouselNavButtons component', () => {
  const defaultProps = {
    onPreviousSlide: jest.fn(),
    onNextSlide: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the previous button when not on the first slide', () => {
    render(
      <CarouselNavButtons
        {...defaultProps}
        isFirstSlide={false}
        isLastSlide={true}
      />,
    );

    const prevButton = screen.getByTestId('carousel-nav-prev-test-id');
    expect(prevButton).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(defaultProps.onPreviousSlide).toHaveBeenCalled();

    expect(document.body).toMatchSnapshot();
  });

  it('renders the next button when not on the last slide', () => {
    render(
      <CarouselNavButtons
        {...defaultProps}
        isFirstSlide={true}
        isLastSlide={false}
      />,
    );

    const nextButton = screen.getByTestId('carousel-nav-next-test-id');
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(defaultProps.onNextSlide).toHaveBeenCalled();

    expect(document.body).toMatchSnapshot();
  });

  it('renders both buttons when not on first or last slide', () => {
    render(
      <CarouselNavButtons
        {...defaultProps}
        isFirstSlide={false}
        isLastSlide={false}
      />,
    );

    expect(screen.getByTestId('carousel-nav-prev-test-id')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-nav-next-test-id')).toBeInTheDocument();

    expect(document.body).toMatchSnapshot();
  });

  it('renders no buttons when on first and last slide (edge case)', () => {
    render(
      <CarouselNavButtons
        {...defaultProps}
        isFirstSlide={true}
        isLastSlide={true}
      />,
    );

    expect(
      screen.queryByTestId('carousel-nav-prev-test-id'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('carousel-nav-next-test-id'),
    ).not.toBeInTheDocument();

    expect(document.body).toMatchSnapshot();
  });
});
