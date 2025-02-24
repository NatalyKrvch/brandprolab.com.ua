import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import {
  VIDEO_IFRAME_TEST_ID,
  VIDEO_PLAY_BUTTON_TEST_ID,
  VIDEO_TEST_ID,
  VIDEO_THUMBNAIL_TEST_ID,
} from '@/lib/testIDs';

import Video from './Video';

jest.mock('next/image', () => {
  const MockImage = ({ src, alt, ...props }: { src: string; alt: string }) => (
    <img src={src} alt={alt} {...props} />
  );
  MockImage.displayName = 'MockImage';
  return MockImage;
});

describe('Video component', () => {
  const defaultProps = {
    videoUrl: 'https://www.youtube.com/watch?v=testvideo12345',
    thumbnailSrc: '/test-thumbnail.jpg',
  };

  it('renders the Video component', () => {
    const { asFragment } = render(<Video {...defaultProps} />);
    const videoElement = screen.getByTestId(VIDEO_TEST_ID);

    expect(videoElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the thumbnail correctly', () => {
    const { asFragment } = render(<Video {...defaultProps} />);
    const thumbnailElement = screen.getByTestId(VIDEO_THUMBNAIL_TEST_ID);

    expect(thumbnailElement).toBeInTheDocument();
    expect(thumbnailElement).toHaveAttribute('src', '/test-thumbnail.jpg');
    expect(thumbnailElement).toHaveAttribute('alt', 'Video Thumbnail');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the play button', () => {
    const { asFragment } = render(<Video {...defaultProps} />);
    const playButton = screen.getByTestId(VIDEO_PLAY_BUTTON_TEST_ID);

    expect(playButton).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('replaces thumbnail with iframe when play button is clicked', () => {
    const videoUrl = 'https://www.youtube.com/watch?v=testvideo12345';
    const { asFragment } = render(
      <Video videoUrl={videoUrl} thumbnailSrc="/test-thumbnail.jpg" />,
    );
    const playButton = screen.getByTestId(VIDEO_PLAY_BUTTON_TEST_ID);

    fireEvent.click(playButton);

    const iframeElement = screen.getByTestId(VIDEO_IFRAME_TEST_ID);
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/testvideo12345?autoplay=1&rel=0',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render iframe initially', () => {
    const { asFragment } = render(<Video {...defaultProps} />);
    expect(screen.queryByTestId(VIDEO_IFRAME_TEST_ID)).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
