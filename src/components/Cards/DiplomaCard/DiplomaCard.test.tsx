import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import {
  DIPLOMA_CARD_TEST_ID,
  DIPLOMA_IMAGE_TEST_ID,
  DIPLOMA_OVERLAY_TEST_ID,
} from '@/lib/testIDs';

import DiplomaCard from './DiplomaCard';

jest.mock('next/image', () => {
  const MockedImage = ({
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
      data-testid={DIPLOMA_IMAGE_TEST_ID}
    />
  );
  MockedImage.displayName = 'MockedNextImage';
  return MockedImage;
});

describe('DiplomaCard component', () => {
  const defaultProps = {
    diplomaURL: '/test-diploma.jpg',
    onClick: jest.fn(),
  };

  it('renders the DiplomaCard component', () => {
    const { asFragment } = render(<DiplomaCard {...defaultProps} />);
    const cardElement = screen.getByTestId(DIPLOMA_CARD_TEST_ID);

    expect(cardElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the diploma image correctly', () => {
    const { asFragment } = render(<DiplomaCard {...defaultProps} />);
    const imageElement = screen.getByTestId(DIPLOMA_IMAGE_TEST_ID);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/test-diploma.jpg');
    expect(imageElement).toHaveAttribute('alt', 'Diploma');
    expect(asFragment()).toMatchSnapshot();
  });

  it('triggers onClick when overlay is clicked', () => {
    const { asFragment } = render(<DiplomaCard {...defaultProps} />);
    const overlayElement = screen.getByTestId(DIPLOMA_OVERLAY_TEST_ID);

    fireEvent.click(overlayElement);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
