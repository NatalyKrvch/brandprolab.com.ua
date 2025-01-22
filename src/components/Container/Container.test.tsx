import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container component', () => {
  it('renders children inside the container', () => {
    render(
      <Container>
        <p>Test content</p>
      </Container>,
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies fullWidth styles when fullWidth is true', () => {
    const { container } = render(
      <Container fullWidth>
        <p>Full width content</p>
      </Container>,
    );

    expect(container.firstChild).toHaveClass('mx-auto');
  });

  it('applies default styles when fullWidth is false', () => {
    const { container } = render(
      <Container>
        <p>Default content</p>
      </Container>,
    );

    expect(container.firstChild).toHaveClass('mx-auto');
    expect(container.firstChild).toHaveClass('max-w-[1224px]');
    expect(container.firstChild).toHaveClass('px-4');
  });

  it('applies tablet and desktop styles correctly', () => {
    const { container } = render(
      <Container>
        <p>Responsive content</p>
      </Container>,
    );

    expect(container.firstChild).toHaveClass('tablet:px-12');
    expect(container.firstChild).toHaveClass('desktop:px-12');
  });
});
