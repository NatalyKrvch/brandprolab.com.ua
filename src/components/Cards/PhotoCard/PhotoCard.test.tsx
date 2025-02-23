import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  PHOTO_CARD_IMAGE_TEST_ID,
  PHOTO_CARD_TEXT_TEST_ID,
  SIMPLE_CARD_TEST_ID,
} from '@/lib/testIDs';

import PhotoCard from './PhotoCard';

jest.mock('next/image', () => {
  const MockImage = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} data-testid={PHOTO_CARD_IMAGE_TEST_ID} />
  );
  MockImage.displayName = 'MockImage';
  return MockImage;
});

describe('PhotoCard component', () => {
  const defaultProps = {
    text: 'Sample Text',
    photoUrl: '/test-photo.jpg',
    backgroundUrl: '/test-background.jpg',
  };

  it('renders the PhotoCard component', () => {
    const { asFragment } = render(<PhotoCard {...defaultProps} />);
    const cardElement = screen.getByTestId(SIMPLE_CARD_TEST_ID);

    expect(cardElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders text when provided', () => {
    const { asFragment } = render(<PhotoCard {...defaultProps} />);
    const textElement = screen.getByTestId(PHOTO_CARD_TEXT_TEST_ID);

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('Sample Text');
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render text when not provided', () => {
    const { asFragment } = render(
      <PhotoCard
        photoUrl={defaultProps.photoUrl}
        backgroundUrl={defaultProps.backgroundUrl}
      />,
    );
    expect(
      screen.queryByTestId(PHOTO_CARD_TEXT_TEST_ID),
    ).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the photo correctly', () => {
    const { asFragment } = render(<PhotoCard {...defaultProps} />);
    const imageElement = screen.getByTestId(PHOTO_CARD_IMAGE_TEST_ID);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/test-photo.jpg');
    expect(imageElement).toHaveAttribute('alt', 'Photo');
    expect(asFragment()).toMatchSnapshot();
  });
});
