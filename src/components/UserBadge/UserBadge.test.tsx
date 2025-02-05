import { render, screen } from '@testing-library/react';
import UserBadge from './UserBadge';
import '@testing-library/jest-dom';
import {
  USER_BADGE_TEST_ID,
  USER_BADGE_IMAGE_TEST_ID,
  USER_BADGE_NAME_TEST_ID,
} from '@/lib/constants';

jest.mock('next/image', () => {
  const MockImage = ({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className?: string;
  }) => (
    <img
      src={src}
      alt={alt}
      className={className}
      data-testid={USER_BADGE_IMAGE_TEST_ID}
    />
  );
  MockImage.displayName = 'MockImage';
  return MockImage;
});

describe('UserBadge component', () => {
  const defaultProps = {
    userName: 'John Doe',
    userPhotoUrl: '/test-image.jpg',
  };

  it('renders the UserBadge component', () => {
    const { asFragment } = render(<UserBadge {...defaultProps} />);
    const badgeElement = screen.getByTestId(USER_BADGE_TEST_ID);

    expect(badgeElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the correct user name', () => {
    const { asFragment } = render(<UserBadge {...defaultProps} />);
    const nameElement = screen.getByTestId(USER_BADGE_NAME_TEST_ID);

    expect(nameElement).toHaveTextContent('John Doe');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the user image with correct attributes', () => {
    const { asFragment } = render(<UserBadge {...defaultProps} />);
    const imageElement = screen.getByTestId(USER_BADGE_IMAGE_TEST_ID);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/test-image.jpg');
    expect(imageElement).toHaveAttribute('alt', 'John Doe');
    expect(asFragment()).toMatchSnapshot();
  });
});
