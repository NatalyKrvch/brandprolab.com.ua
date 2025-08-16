import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  FULL_WIDTH_CONTAINER_TEST_ID,
  LIMITED_WIDTH_CONTAINER_TEST_ID,
} from '@/lib/testIDs';

import { ContainerVariant } from '../Container';
import Section from './Section';

jest.mock('@/sanity/lib/serverClient', () => ({
  client: { fetch: jest.fn() },
}));

jest.mock('@/sanity/lib/image', () => ({
  urlForImage: (image: any) =>
    image?.asset?._ref ? `/mocked-url-${image.asset._ref}` : '/mocked-fallback',
}));

jest.mock('yet-another-react-lightbox', () => {
  const MockLightbox = () => (
    <div data-testid="mock-lightbox">Mock Lightbox</div>
  );
  MockLightbox.displayName = 'MockLightbox';
  return MockLightbox;
});

jest.mock('yet-another-react-lightbox/plugins/zoom', () => ({}));

describe('Section component', () => {
  it('renders children inside the section and default container', () => {
    const { asFragment } = render(
      <Section>
        <p>Section content</p>
      </Section>,
    );

    const container = screen.getByTestId(LIMITED_WIDTH_CONTAINER_TEST_ID);
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent('Section content');

    expect(asFragment()).toMatchSnapshot();
  });

  it('applies custom className and containerClassName', () => {
    const { container, asFragment } = render(
      <Section className="bg-red-500" containerClassName="py-8">
        <p>Styled section</p>
      </Section>,
    );

    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-red-500');

    const containerElement = screen.getByTestId(
      LIMITED_WIDTH_CONTAINER_TEST_ID,
    );
    expect(containerElement).toHaveClass('py-8');

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with full-width container when variant is FULL', () => {
    const { asFragment } = render(
      <Section containerVariant={ContainerVariant.FULL}>
        <p>Full width section</p>
      </Section>,
    );

    const container = screen.getByTestId(FULL_WIDTH_CONTAINER_TEST_ID);
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent('Full width section');

    expect(asFragment()).toMatchSnapshot();
  });
});
