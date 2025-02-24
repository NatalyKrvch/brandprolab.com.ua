import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  PHOTO_CARD_IMAGE_TEST_ID,
  PHOTO_CARD_TEXT_TEST_ID,
} from '@/lib/testIDs';

import PhotoCard from './PhotoCard';

jest.mock('next/image', () => {
  const MockImage = ({ src, alt, ...props }: { src: string; alt: string }) => (
    <img src={src} alt={alt} {...props} />
  );
  MockImage.displayName = 'MockImage';
  return MockImage;
});

describe('PhotoCard component', () => {
  const defaultProps = {
    photoUrl: '/test-photo.jpg',
    backgroundUrl: '/test-background.jpg',
    cardHeight: 500,
    imageWidth: 200,
    imageHeight: 200,
    text: 'Sample Text',
  };

  it('renders the PhotoCard component', () => {
    const { asFragment } = render(<PhotoCard {...defaultProps} />);
    expect(screen.getByTestId(PHOTO_CARD_TEXT_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(PHOTO_CARD_IMAGE_TEST_ID)).toBeInTheDocument();
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
      <PhotoCard {...defaultProps} text={undefined} />,
    );

    expect(
      screen.queryByTestId(PHOTO_CARD_TEXT_TEST_ID),
    ).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the photo with correct attributes', () => {
    const { asFragment } = render(<PhotoCard {...defaultProps} />);
    const imageElement = screen.getByTestId(PHOTO_CARD_IMAGE_TEST_ID);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/test-photo.jpg');
    expect(imageElement).toHaveAttribute('alt', 'Photo');
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies correct styles for dimensions', () => {
    const { asFragment } = render(<PhotoCard {...defaultProps} />);
    const cardElement = screen.getByTestId(
      PHOTO_CARD_IMAGE_TEST_ID,
    ).parentElement;

    expect(cardElement).toHaveStyle({
      width: `${defaultProps.imageWidth}px`,
      height: `${defaultProps.imageHeight}px`,
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
