import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import AdaptiveImage from './AdaptiveImage';
import { AdaptiveImageProps } from './types';

describe('AdaptiveImage component', () => {
  const defaultProps: AdaptiveImageProps = {
    alt: 'Test Alt',
    sources: [
      { srcSet: '/img-small.jpg', media: '(max-width: 600px)' },
      { srcSet: '/img-large.jpg', media: '(min-width: 601px)' },
    ],
    fallbackSrc: '/fallback.jpg',
    className: 'test-class',
  };

  it('returns null when no fallbackSrc is provided', () => {
    const { container, asFragment } = render(
      // @ts-expect-error testing missing fallbackSr
      <AdaptiveImage alt="X" sources={defaultProps.sources} />,
    );
    expect(container.firstChild).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  it('returns nothing when sources array is empty', () => {
    const props = { ...defaultProps, sources: [] };
    const { container, asFragment } = render(<AdaptiveImage {...props} />);
    expect(container.firstChild).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a <picture> with multiple <source> and a fallback <img>', () => {
    const { container, asFragment } = render(
      <AdaptiveImage {...defaultProps} />,
    );

    const picture = container.querySelector('picture');
    expect(picture).toBeInTheDocument();
    expect(picture).toHaveClass('test-class');

    const sources = container.querySelectorAll('source');
    expect(sources).toHaveLength(defaultProps.sources.length);
    expect(sources[0]).toHaveAttribute('srcset', '/img-small.jpg');
    expect(sources[0]).toHaveAttribute('media', '(max-width: 600px)');
    expect(sources[1]).toHaveAttribute('srcset', '/img-large.jpg');
    expect(sources[1]).toHaveAttribute('media', '(min-width: 601px)');

    const img = screen.getByAltText('Test Alt') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/fallback.jpg');
    expect(img).toHaveClass('test-class');

    expect(asFragment()).toMatchSnapshot();
  });
});
