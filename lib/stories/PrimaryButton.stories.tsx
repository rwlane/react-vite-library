import { Meta, StoryObj } from '@storybook/react';
import { MPButton } from '../components/MPButton';

const meta: Meta<typeof MPButton> = {
  component: MPButton,
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;
type Story = StoryObj<typeof MPButton>;

export const Primary: Story = {
  args: {
    buttonText: "Primary Button",
  }
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    disabled: false,
    buttonText: "Secondary Button",
    variant: "contained",
  }
};

export const Error: Story = {
  args: {
    color: "error",
    disabled: false,
    buttonText: "Error Button",
    variant: "contained",
  }
};