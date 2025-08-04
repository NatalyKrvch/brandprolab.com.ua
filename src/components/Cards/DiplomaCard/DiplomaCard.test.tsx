import { fireEvent, render, screen } from '@testing-library/react';

import {
  DIPLOMA_CARD_TEST_ID,
  DIPLOMA_IMAGE_TEST_ID,
  DIPLOMA_OVERLAY_TEST_ID,
} from '@/lib/testIDs';

import DiplomaCard from './DiplomaCard';

jest.mock('@/components/ImageLightbox', () => ({
  ImageLightbox: ({ open }: { open: boolean }) => {
    if (!open) return null;
    return <div data-testid="mock-lightbox">Mock Lightbox</div>;
  },
}));

const mockColorDiplomaURL = 'https://example.com/color-diploma.jpg';
const mockBwDiplomaURL = 'https://example.com/bw-diploma.jpg';

describe('DiplomaCard', () => {
  it('renders correctly with black & white image and overlay', () => {
    const { container } = render(
      <DiplomaCard
        colorDiplomaURL={mockColorDiplomaURL}
        bwDiplomaURL={mockBwDiplomaURL}
      />,
    );

    expect(screen.getByTestId(DIPLOMA_CARD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(DIPLOMA_IMAGE_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(DIPLOMA_OVERLAY_TEST_ID)).toBeInTheDocument();
    expect(screen.queryByTestId('mock-lightbox')).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders correct black & white image attributes', () => {
    render(
      <DiplomaCard
        colorDiplomaURL={mockColorDiplomaURL}
        bwDiplomaURL={mockBwDiplomaURL}
      />,
    );

    const image = screen.getByTestId(DIPLOMA_IMAGE_TEST_ID);

    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt', 'Diploma');
  });

  it('opens lightbox with color image after overlay click', () => {
    render(
      <DiplomaCard
        colorDiplomaURL={mockColorDiplomaURL}
        bwDiplomaURL={mockBwDiplomaURL}
      />,
    );

    fireEvent.click(screen.getByTestId(DIPLOMA_OVERLAY_TEST_ID));

    expect(screen.getByTestId('mock-lightbox')).toBeInTheDocument();
  });
});
