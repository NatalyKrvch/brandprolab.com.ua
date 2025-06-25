import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  EXTERNAL_LINK_TEST_ID,
  HERO_MAIN_CARD_ICON_TEST_ID,
  SIMPLE_CARD_TEST_ID,
} from '@/lib/testIDs';

import HeroMainCard from './HeroMainCard';

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
      data-testid={HERO_MAIN_CARD_ICON_TEST_ID}
    />
  );
  MockedImage.displayName = 'MockedNextImage';
  return MockedImage;
});

describe('HeroMainCard component', () => {
  const defaultProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    description: 'This is the main card description.',
    buttonText: 'Click Me',
    buttonLink: '/test-link',
    iconURL: '/test-icon.svg',
  };

  it('renders the component correctly', () => {
    const { asFragment } = render(<HeroMainCard {...defaultProps} />);
    const component = screen.getByTestId(SIMPLE_CARD_TEST_ID);

    expect(component).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders icon image with correct src', () => {
    const { asFragment } = render(<HeroMainCard {...defaultProps} />);
    const image = screen.getByTestId(HERO_MAIN_CARD_ICON_TEST_ID);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', defaultProps.iconURL);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders title and subtitle', () => {
    const { asFragment } = render(<HeroMainCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders description', () => {
    const { asFragment } = render(<HeroMainCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders button with correct text and link', () => {
    const { asFragment } = render(<HeroMainCard {...defaultProps} />);
    const link = screen.getByTestId(EXTERNAL_LINK_TEST_ID);

    expect(link).toHaveAttribute('href', defaultProps.buttonLink);
    expect(screen.getByText(defaultProps.buttonText)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
