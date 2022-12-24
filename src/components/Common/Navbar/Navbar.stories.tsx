import { Meta, Story } from "@storybook/react";

import Navbar from "./Navbar";

export default {
  title: "Common/Navbar",
  component: Navbar,
  decorators: [],
  parameters: {
    componentSubtitle: "Navigation Bar Component",
  },
  argTypes: {},
} as Meta;

export const Default: Story = () => <Navbar/>;

