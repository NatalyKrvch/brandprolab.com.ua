import type { Meta, StoryObj } from '@storybook/react';

import Video from './Video';

const meta: Meta<typeof Video> = {
  title: 'Components/Video',
  component: Video,
  argTypes: {
    videoUrl: { control: 'text' },
    thumbnailSrc: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailSrc: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailSrc: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    className: '',
  },
};
