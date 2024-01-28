import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Example/Light",
  tags: ['autodocs'],
  argTypes: {
    variant: {
        control: {type: 'radio'},
        options: ['green', 'yellow', 'red']
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

/** Light Base Description  */
export const Base: Story = {
  args: {},
};
export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};
export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const Another: Story = {
  args: {
    variant: "red",
  },

  render: (args) => {
    return <Light {...args} />;
  },
};

export const Combined: Story = {
  render: () => {
    return (
      <div style={{display: "flex", flexDirection: "column", gap: 10, border: "1px solid black", width: 'max-content', background: 'grey'}}>
        <Light variant="red" />
        <Light variant="yellow" />
        <Light />
      </div>
    );
  },
};
