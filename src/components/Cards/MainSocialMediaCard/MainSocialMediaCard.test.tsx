import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import MainSocialMediaCard from './MainSocialMediaCard';
import { MainSocialMediaCardProps } from './types';

jest.mock('@/components/AdaptiveImage', () => ({
  __esModule: true,
  AdaptiveImage: ({
    fallbackSrc,
    alt,
  }: {
    fallbackSrc: string;
    alt: string;
  }) => <img src={fallbackSrc} alt={alt} />,
}));

jest.mock('@/components/Icon', () => ({
  __esModule: true,
  Icon: ({ circleColor, iconURL, type }: any) => (
    <svg
      role="img"
      aria-label="icon"
      data-circle-color={circleColor}
      data-icon-url={iconURL}
      data-type={type}
    />
  ),
}));

jest.mock('@/components/Links', () => ({
  __esModule: true,
  ExternalLink: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>,
}));

jest.mock('../SimpleCard', () => ({
  __esModule: true,
  SimpleCard: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('MainSocialMediaCard', () => {
  const defaultProps: MainSocialMediaCardProps = {
    desktopPhotoURL: '/desktop.jpg',
    tabletPhotoURL: '/tablet.jpg',
    mobilePhotoURL: '/mobile.jpg',
    iconURL: '/icon.svg',
    platformName: 'Test Platform',
    description: 'Test description',
    platformURL: 'https://example.com',
  };

  it('renders a link with correct href and matches snapshot', () => {
    const { asFragment } = render(<MainSocialMediaCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', defaultProps.platformURL);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the icon SVG with correct attributes and matches snapshot', () => {
    const { asFragment, container } = render(
      <MainSocialMediaCard {...defaultProps} />,
    );
    const icon = container.querySelector('svg[aria-label="icon"]');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('data-icon-url', defaultProps.iconURL);
    expect(icon).toHaveAttribute('data-circle-color');
    expect(icon).toHaveAttribute('data-type');
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays platformName and description text and matches snapshot', () => {
    const { asFragment } = render(<MainSocialMediaCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.platformName)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the fallback image with correct src and alt and matches snapshot', () => {
    const { asFragment } = render(<MainSocialMediaCard {...defaultProps} />);
    const img = screen.getByAltText('Photo') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', defaultProps.mobilePhotoURL);
    expect(img).toHaveAttribute('alt', 'Photo');
    expect(asFragment()).toMatchSnapshot();
  });
});
