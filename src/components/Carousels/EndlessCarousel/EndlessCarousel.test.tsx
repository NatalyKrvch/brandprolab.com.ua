import { render, screen, waitFor } from '@testing-library/react';

import { ENDLESS_CAROUSEL_TEST_ID } from '@/lib/testIDs';

import EndlessCarousel from './EndlessCarousel';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('EndlessCarousel', () => {
  it('renders children inside the marquee', async () => {
    const { container } = render(
      <EndlessCarousel>
        <div data-testid="child">Test Content</div>
      </EndlessCarousel>,
    );

    await waitFor(() => {
      const children = screen.getAllByTestId('child');
      expect(children.length).toBeGreaterThanOrEqual(2);
    });

    expect(container).toMatchSnapshot();
  });

  it('applies custom className to wrapper', () => {
    const { container } = render(
      <EndlessCarousel className="custom-class">
        <div>Content</div>
      </EndlessCarousel>,
    );

    const wrapper = screen.getByTestId(ENDLESS_CAROUSEL_TEST_ID);
    expect(wrapper).toHaveClass('custom-class');
    expect(container).toMatchSnapshot();
  });

  it('respects default props if not provided', () => {
    const { container } = render(
      <EndlessCarousel>
        <div>Content</div>
      </EndlessCarousel>,
    );

    expect(container.querySelector('.rfm-marquee')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
