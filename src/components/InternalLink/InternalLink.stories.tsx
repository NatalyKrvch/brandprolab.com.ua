import type { Meta, StoryObj } from '@storybook/react';
import InternalLink from './InternalLink';

const meta: Meta<typeof InternalLink> = {
  title: 'Components/InternalLink',
  component: InternalLink,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL the link navigates to.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
      },
    },
    className: {
      control: 'text',
      description: 'Optional class name for styling the link.',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      description: 'Content inside the link.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InternalLink>;

export const Default: Story = {
  args: {
    href: '#',
    className: 'font-bold',
    children: 'Default Internal Link',
  },
};

export const CustomStyled: Story = {
  args: {
    href: '/custom',
    className: 'text-green-500 font-bold hover:text-green-700 hover:underline',
    children: 'Custom Styled Internal Link',
  },
};

export const WithSVG: Story = {
  args: {
    href: '/svg',
    className:
      'flex items-center space-x-2 text-purple-500 hover:text-purple-700',
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </>
    ),
  },
};
