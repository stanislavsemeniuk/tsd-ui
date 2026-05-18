import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSelector } from "@tsd-ui/core";

const meta = {
  title: "Core/ThemeSelector",
  component: ThemeSelector,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ThemeSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
