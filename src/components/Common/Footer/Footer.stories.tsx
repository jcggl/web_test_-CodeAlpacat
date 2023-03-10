import { ComponentMeta, ComponentStory } from "@storybook/react";

import Footer from "./Footer";

export default {
  title: "Components/Common/Footer",
  component: Footer,
  parameters: {
    componentSubtitle: "Footer Component",
  },
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = () => <Footer />;
