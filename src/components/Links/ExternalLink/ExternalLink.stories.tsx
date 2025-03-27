import type { Meta, StoryObj } from '@storybook/react';

import ExternalLink from './ExternalLink';

const meta: Meta<typeof ExternalLink> = {
  title: 'Components/ExternalLink',
  component: ExternalLink,
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
type Story = StoryObj<typeof ExternalLink>;

export const Default: Story = {
  args: {
    href: '#',
    className: 'font-bold',
    children: 'Default External Link',
  },
};

export const CustomStyled: Story = {
  args: {
    href: 'https://example.com',
    className: 'text-green-500 font-bold hover:text-green-700',
    children: 'Custom Styled External Link',
  },
};

export const WithSVG: Story = {
  args: {
    href: 'https://svg.com',
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
