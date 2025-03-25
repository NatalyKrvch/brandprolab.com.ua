import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { TESTIMONIAL_CARD_TEST_ID } from '@/lib/testIDs';

import TestimonialCarousel from './TestimonialCarousel';

jest.mock('./hooks/useTestimonialCarousel', () => ({
  useTestimonialCarousel: () => ({
    sliderRef: jest.fn(),
    currentSlideIndex: 0,
    isFirstSlide: true,
    isLastSlide: false,
    handleNextSlide: jest.fn(),
    handlePreviousSlide: jest.fn(),
    goToSlide: jest.fn(),
  }),
}));

jest.mock('../Cards/TestimonialCard', () => ({
  TestimonialCard: ({ className }: { className?: string }) => (
    <div data-testid={TESTIMONIAL_CARD_TEST_ID} className={className}>
      Mocked Testimonial Card
    </div>
  ),
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

describe('TestimonialCarousel component', () => {
  const mockTestimonials = [
    { text: 'Test 1', clientName: 'User 1', clientPhotoUrl: '/img1.jpg' },
    { text: 'Test 2', clientName: 'User 2', clientPhotoUrl: '/img2.jpg' },
    { text: 'Test 3', clientName: 'User 3', clientPhotoUrl: '/img3.jpg' },
  ];

  beforeAll(() => {
    Object.defineProperty(global, 'crypto', {
      value: {
        randomUUID: () => 'mocked-uuid',
      },
    });
  });

  it('renders all testimonial cards', () => {
    const { asFragment } = render(
      <TestimonialCarousel testimonials={mockTestimonials} />,
    );

    const testimonialCards = screen.getAllByTestId(TESTIMONIAL_CARD_TEST_ID);
    expect(testimonialCards).toHaveLength(mockTestimonials.length);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders carousel navigation buttons', () => {
    render(<TestimonialCarousel testimonials={mockTestimonials} />);
    const navButtons = screen.getByTestId('carousel-nav-buttons-mock');
    expect(navButtons).toBeInTheDocument();
  });

  it('renders pagination dots', () => {
    render(<TestimonialCarousel testimonials={mockTestimonials} />);
    const pagination = screen.getByTestId('pagination-dots-mock');
    expect(pagination).toBeInTheDocument();
  });
});
