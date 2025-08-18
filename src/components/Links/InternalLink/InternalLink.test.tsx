import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import type { PropsWithChildren } from 'react';

import { INTERNAL_LINK_TEST_ID } from '@/lib/testIDs';

import InternalLink from './InternalLink';
import { InternalLinkProps } from './types';

jest.mock('next/link', () => {
  const React = require('react');
  return React.forwardRef(function MockNextLink(
    { href, children, _prefetch, ...rest }: any,
    ref: any,
  ) {
    const h = typeof href === 'string' ? href : href?.pathname || '#';
    return React.createElement('a', { href: h, ref, ...rest }, children);
  });
});

describe('InternalLink component', () => {
  const defaultProps: PropsWithChildren<InternalLinkProps> = {
    href: '/example',
    className: 'test-class',
    children: 'Test Link',
  };

  it('renders the link with the correct href', () => {
    const { asFragment } = render(<InternalLink {...defaultProps} />);

    const linkElement = screen.getByTestId(INTERNAL_LINK_TEST_ID);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/example');

    expect(asFragment()).toMatchSnapshot();
  });

  it('applies the provided className', () => {
    const { asFragment } = render(<InternalLink {...defaultProps} />);

    const linkElement = screen.getByTestId(INTERNAL_LINK_TEST_ID);
    expect(linkElement).toHaveClass('test-class');

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const { asFragment } = render(<InternalLink {...defaultProps} />);

    const linkElement = screen.getByTestId(INTERNAL_LINK_TEST_ID);
    expect(linkElement).toHaveTextContent('Test Link');

    expect(asFragment()).toMatchSnapshot();
  });

  it('handles missing className gracefully', () => {
    const { asFragment } = render(
      <InternalLink href={defaultProps.href}>
        {defaultProps.children}
      </InternalLink>,
    );

    const linkElement = screen.getByTestId(INTERNAL_LINK_TEST_ID);
    expect(linkElement).not.toHaveClass();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an SVG element when passed as children', () => {
    const SVGIcon = () => (
      <svg
        data-testid="test-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M10 10h4v4h-4z" />
      </svg>
    );

    const { asFragment } = render(
      <InternalLink href="/example" className="test-class">
        <SVGIcon />
      </InternalLink>,
    );

    const linkElement = screen.getByTestId(INTERNAL_LINK_TEST_ID);
    expect(linkElement).toBeInTheDocument();

    const svgElement = screen.getByTestId('test-svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');

    expect(asFragment()).toMatchSnapshot();
  });
});
