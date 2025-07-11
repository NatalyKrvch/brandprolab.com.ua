import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  EXTERNAL_LINK_TEST_ID,
  HERO_TEXT_CONTENT_ICON_TEST_ID,
  HERO_TEXT_CONTENT_TEST_ID,
} from '@/lib/testIDs';

import HeroTextContent from './HeroTextContent';

jest.mock('next/image', () => {
  const MockedImage = ({
    src,
    alt,
    className,
    'data-testid': testId,
  }: {
    src: string;
    alt: string;
    className?: string;
    'data-testid'?: string;
  }) => <img src={src} alt={alt} className={className} data-testid={testId} />;
  MockedImage.displayName = 'MockedNextImage';
  return MockedImage;
});

describe('HeroTextContent component', () => {
  const defaultProps = {
    iconUrl: '/test-icon.svg',
    title: 'Hero Title',
    subtitle: 'Hero Subtitle',
    description: 'Hero section description.',
    buttonText: 'Get Started',
    buttonLink: '/get-started',
    iconClassName: 'custom-icon',
    titleClassName: 'custom-title',
    titleSpanClassName: 'custom-title-span',
    subtitleClassName: 'custom-subtitle',
    descriptionClassName: 'custom-description',
    wrapperClassName: 'custom-wrapper',
    contentWrapperClassName: 'custom-content-wrapper',
  };

  it('renders wrapper with test ID', () => {
    render(<HeroTextContent {...defaultProps} />);
    const wrapper = screen.getByTestId(HERO_TEXT_CONTENT_TEST_ID);

    expect(wrapper).toBeInTheDocument();
  });

  it('renders icon image with correct src', () => {
    render(<HeroTextContent {...defaultProps} />);
    const icon = screen.getByTestId(HERO_TEXT_CONTENT_ICON_TEST_ID);

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', defaultProps.iconUrl);
  });

  it('renders title and subtitle', () => {
    render(<HeroTextContent {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<HeroTextContent {...defaultProps} />);

    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it('renders button with correct text and link', () => {
    render(<HeroTextContent {...defaultProps} />);
    const link = screen.getByTestId(EXTERNAL_LINK_TEST_ID);

    expect(link).toHaveAttribute('href', defaultProps.buttonLink);
    expect(screen.getByText(defaultProps.buttonText)).toBeInTheDocument();
  });
});
