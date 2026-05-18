import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { LoadingWrapper } from "@tsd-ui/core";

const meta = {
  title: "Core/LoadingWrapper",
  component: LoadingWrapper,
  parameters: { layout: "centered" },
  argTypes: {
    isFetching: { control: "boolean" },
    fetchError: { control: "text" },
  },
} satisfies Meta<typeof LoadingWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    isFetching: true,
    children: 'Content loaded',
  },
};

export const AfterLoading: Story = {
  args: {
    isFetching: false,
    children: 'Content loaded successfully',
  },
};

export const WithError: Story = {
  args: {
    isFetching: false,
    fetchError: "Network error",
    children: 'Content without error',
  },
};
