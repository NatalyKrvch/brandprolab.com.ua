import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { VideoSectionProps } from './types';
import VideoSection from './VideoSection';

jest.mock('@/sanity/lib/image', () => ({
  urlFor: () => ({
    url: () => '/test-thumbnail.jpg',
  }),
}));

jest.mock('@/sanity/lib/client', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

describe('VideoSection component', () => {
  const mockData: VideoSectionProps['videoData'] = {
    _id: 'test-id',
    _type: 'videoSection',
    title: 'Test Video Section Title',
    label: 'Test Label',
    description: 'Test Description',
    buttonText: 'Test Button',
    buttonLink: '/test-link',
    VideoLink: 'https://youtube.com/watch?v=testvideo123',
    videoCover: {
      _type: 'image',
      asset: {
        _ref: 'image-someassetid',
        _type: 'reference',
      },
    },
  };

  it('renders VideoSection correctly', () => {
    const { asFragment } = render(<VideoSection videoData={mockData} />);

    expect(screen.getByText('Test Video Section Title')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Test Button' })).toHaveAttribute(
      'href',
      '/test-link',
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
