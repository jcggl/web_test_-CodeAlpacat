import { Meta, Story } from "@storybook/react";

import Footer from "./Footer";

export default {
  title: "Common/Footer",
  component: Footer,
  decorators: [],
  parameters: {
    componentSubtitle: "Footer Component",
  },
  argTypes: {},
} as Meta;

export const Default: Story = () => <Footer />;
