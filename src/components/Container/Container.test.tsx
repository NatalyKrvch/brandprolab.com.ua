import { render, screen } from '@testing-library/react';
import Container from './Container';
import '@testing-library/jest-dom';
import {
  FULL_WIDTH_CONTAINER_TEST_ID,
  LIMITED_WIDTH_CONTAINER_TEST_ID,
} from '@/lib/constants';

describe('Container component', () => {
  it('renders children inside the full-width container', () => {
    const { asFragment } = render(
      <Container fullWidth>
        <p>Test content</p>
      </Container>,
    );

    const container = screen.getByTestId(FULL_WIDTH_CONTAINER_TEST_ID);
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent('Test content');

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders children inside the limited-width container', () => {
    const { asFragment } = render(
      <Container>
        <p>Default content</p>
      </Container>,
    );

    const container = screen.getByTestId(LIMITED_WIDTH_CONTAINER_TEST_ID);
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent('Default content');

    expect(asFragment()).toMatchSnapshot();
  });

  it('applies fullWidth styles when fullWidth is true', () => {
    const { asFragment } = render(
      <Container fullWidth>
        <p>Full width content</p>
      </Container>,
    );

    const container = screen.getByTestId(FULL_WIDTH_CONTAINER_TEST_ID);
    expect(container).toHaveClass('mx-auto');

    expect(asFragment()).toMatchSnapshot();
  });

  it('applies default styles when fullWidth is false', () => {
    const { asFragment } = render(
      <Container>
        <p>Default content</p>
      </Container>,
    );

    const container = screen.getByTestId(LIMITED_WIDTH_CONTAINER_TEST_ID);
    expect(container).toHaveClass('mx-auto');
    expect(container).toHaveClass('max-w-[1224px]');
    expect(container).toHaveClass('px-4');

    expect(asFragment()).toMatchSnapshot();
  });

  it('applies tablet and desktop styles correctly', () => {
    const { asFragment } = render(
      <Container>
        <p>Responsive content</p>
      </Container>,
    );

    const container = screen.getByTestId(LIMITED_WIDTH_CONTAINER_TEST_ID);
    expect(container).toHaveClass('tablet:px-12');
    expect(container).toHaveClass('desktop:px-12');

    expect(asFragment()).toMatchSnapshot();
  });
});
