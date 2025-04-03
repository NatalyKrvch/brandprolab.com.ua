import { render } from '@testing-library/react';

import { SPRAY_BG_TEST_ID } from '@/lib/testIDs';

import SprayBackground from './SprayBackground';

describe('SprayBackground', () => {
  it('renders an img with correct default attributes', () => {
    const { getByTestId, asFragment } = render(<SprayBackground />);

    const img = getByTestId(SPRAY_BG_TEST_ID);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/images/backgrounds/spray.svg');
    expect(img).toHaveAttribute('alt', '');
    expect(img).toHaveAttribute('aria-hidden', 'true');
    expect(img).toHaveClass(
      'pointer-events-none',
      'absolute',
      'inset-0',
      'z-[-1]',
      'select-none',
      'object-cover',
      'blur-2xl',
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('applies custom className if provided', () => {
    const { getByTestId, asFragment } = render(
      <SprayBackground className="left-[200px] top-[100px]" />,
    );

    const img = getByTestId(SPRAY_BG_TEST_ID);
    expect(img).toHaveClass('top-[100px]', 'left-[200px]');

    expect(asFragment()).toMatchSnapshot();
  });
});
