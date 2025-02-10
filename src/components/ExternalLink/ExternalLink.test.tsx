import { render, screen } from '@testing-library/react';
import ExternalLink from './ExternalLink';
import '@testing-library/jest-dom';

import { ExternalLinkProps } from './types';
import { EXTERNAL_LINK_TEST_ID } from '@/lib/testIDs';

describe('ExternalLink component', () => {
  const defaultProps: ExternalLinkProps = {
    href: 'https://example.com',
    className: 'test-class',
    children: 'External Link',
  };

  it('renders the link with the correct href', () => {
    const { asFragment } = render(
      <ExternalLink href={defaultProps.href} className={defaultProps.className}>
        {defaultProps.children}
      </ExternalLink>,
    );

    const linkElement = screen.getByTestId(EXTERNAL_LINK_TEST_ID);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');

    expect(asFragment()).toMatchSnapshot();
  });

  it('applies the provided className', () => {
    const { asFragment } = render(
      <ExternalLink href={defaultProps.href} className={defaultProps.className}>
        {defaultProps.children}
      </ExternalLink>,
    );

    const linkElement = screen.getByTestId(EXTERNAL_LINK_TEST_ID);
    expect(linkElement).toHaveClass('test-class');

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const { asFragment } = render(
      <ExternalLink href={defaultProps.href} className={defaultProps.className}>
        {defaultProps.children}
      </ExternalLink>,
    );

    const linkElement = screen.getByTestId(EXTERNAL_LINK_TEST_ID);
    expect(linkElement).toHaveTextContent('External Link');

    expect(asFragment()).toMatchSnapshot();
  });

  it('has target and rel attributes set for security', () => {
    const { asFragment } = render(
      <ExternalLink href={defaultProps.href} className={defaultProps.className}>
        {defaultProps.children}
      </ExternalLink>,
    );

    const linkElement = screen.getByTestId(EXTERNAL_LINK_TEST_ID);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');

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
      <ExternalLink href={defaultProps.href} className={defaultProps.className}>
        <SVGIcon />
      </ExternalLink>,
    );

    const linkElement = screen.getByTestId(EXTERNAL_LINK_TEST_ID);
    expect(linkElement).toBeInTheDocument();

    const svgElement = screen.getByTestId('test-svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');

    expect(asFragment()).toMatchSnapshot();
  });
});
