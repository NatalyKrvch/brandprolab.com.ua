import type { Meta, StoryObj } from '@storybook/react';
import UnderlinedText from './UnderlinedText';

const meta: Meta<typeof UnderlinedText> = {
  title: 'Components/UnderlinedText',
  component: UnderlinedText,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content inside the underlined text.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UnderlinedText>;

export const Default: Story = {
  args: {
    children: 'Underlined Text',
  },
};
