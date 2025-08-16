import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

jest.mock('yet-another-react-lightbox', () => {
  const MockLightbox = () => <div>Mock Lightbox</div>;
  MockLightbox.displayName = 'MockLightbox';
  return MockLightbox;
});
jest.mock('yet-another-react-lightbox/plugins/zoom', () => ({}));

import { EXTERNAL_LINK_TEST_ID } from '@/lib/testIDs';

import SocialIcons from './SocialIcons';
import type { SocialIconsProps } from './types';

const mkImg = (
  ref: string,
): {
  _type: 'image';
  asset: { _type: 'reference'; _ref: string };
} => ({
  _type: 'image',
  asset: { _type: 'reference', _ref: ref },
});

const mockSocialLinks: SocialIconsProps['socialLinks'] = [
  {
    _key: '1',
    _type: 'socialLink',
    label: 'Facebook',
    url: 'https://facebook.com',
    colorIcon: mkImg('color-123'),
    whiteIcon: mkImg('white-123'),
  },
  {
    _key: '2',
    _type: 'socialLink',
    label: 'Instagram',
    url: 'https://instagram.com',
    colorIcon: mkImg('color-456'),
    whiteIcon: mkImg('white-456'),
  },
];

jest.mock('next/image', () => {
  const MockImage = (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  };
  MockImage.displayName = 'MockNextImage';
  return {
    __esModule: true,
    default: MockImage,
  };
});

jest.mock('@/utils', () => ({
  ...jest.requireActual('@/utils'),
  normalizeImageURL: (image: any) =>
    image?.asset?._ref ? `/mocked-url-${image.asset._ref}` : '/mocked-fallback',
}));

jest.mock('@/sanity/lib/client', () => ({
  client: { fetch: jest.fn() },
}));

describe('SocialIcons component', () => {
  it('renders correct number of external links with proper attrs', () => {
    render(<SocialIcons socialLinks={mockSocialLinks} />);

    const links = screen.getAllByTestId(EXTERNAL_LINK_TEST_ID);
    expect(links).toHaveLength(mockSocialLinks.length);

    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', mockSocialLinks[index].url);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('applies custom className to wrapper ul', () => {
    const { container } = render(
      <SocialIcons socialLinks={mockSocialLinks} className="custom-class" />,
    );
    const ul = container.querySelector('ul');
    expect(ul).toHaveClass('custom-class');
  });

  it('uses white icons by default (isColored undefined/false)', () => {
    render(<SocialIcons socialLinks={mockSocialLinks} />);

    const imgs = screen.getAllByRole('img');
    expect(imgs[0]).toHaveAttribute('src', '/mocked-url-white-123');
    expect(imgs[1]).toHaveAttribute('src', '/mocked-url-white-456');
  });

  it('uses colored icons when isColored=true', () => {
    render(<SocialIcons socialLinks={mockSocialLinks} isColored />);

    const imgs = screen.getAllByRole('img');
    expect(imgs[0]).toHaveAttribute('src', '/mocked-url-color-123');
    expect(imgs[1]).toHaveAttribute('src', '/mocked-url-color-456');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <SocialIcons socialLinks={mockSocialLinks} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
