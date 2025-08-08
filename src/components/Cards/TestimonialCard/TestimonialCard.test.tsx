import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  SIMPLE_CARD_TEST_ID,
  TESTIMONIAL_TEXT_TEST_ID,
  USER_BADGE_TEST_ID,
} from '@/lib/testIDs';

import TestimonialCard from './TestimonialCard';

jest.mock('@/components/UserBadge', () => ({
  UserBadge: ({
    userName,
    userPhotoUrl,
    userLink,
  }: {
    userName: string;
    userPhotoUrl: string;
    userLink?: string;
  }) => (
    <div data-testid={USER_BADGE_TEST_ID}>
      <span>{userName}</span>
      <img src={userPhotoUrl} alt={userName} />
      {userLink && <a href={userLink}>Profile</a>}
    </div>
  ),
}));

describe('TestimonialCard component', () => {
  const defaultProps = {
    text: 'This is a testimonial text.',
    clientName: 'John Doe',
    clientPhotoUrl: '/john-doe.jpg',
    clientLink: 'https://example.com',
  };

  it('renders the TestimonialCard component', () => {
    const { asFragment } = render(<TestimonialCard {...defaultProps} />);
    const testimonialCard = screen.getByTestId(SIMPLE_CARD_TEST_ID);

    expect(testimonialCard).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the testimonial text correctly', () => {
    render(<TestimonialCard {...defaultProps} />);
    const textElement = screen.getByTestId(TESTIMONIAL_TEXT_TEST_ID);

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('This is a testimonial text.');
  });

  it('renders the "Читати більше" button', () => {
    render(<TestimonialCard {...defaultProps} />);
    const readMoreButton = screen.getByRole('button', {
      name: /читати більше/i,
    });

    expect(readMoreButton).toBeInTheDocument();
  });

  it('renders UserBadge when clientName and clientPhotoUrl are provided', () => {
    const { asFragment } = render(<TestimonialCard {...defaultProps} />);
    const userBadge = screen.getByTestId(USER_BADGE_TEST_ID);

    expect(userBadge).toBeInTheDocument();
    expect(userBadge).toHaveTextContent('John Doe');
    expect(userBadge.querySelector('img')).toHaveAttribute(
      'src',
      '/john-doe.jpg',
    );
    expect(userBadge.querySelector('a')).toHaveAttribute(
      'href',
      'https://example.com',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render UserBadge if clientName or clientPhotoUrl is missing', () => {
    render(<TestimonialCard text="Test text" />);
    expect(screen.queryByTestId(USER_BADGE_TEST_ID)).not.toBeInTheDocument();
  });
});
