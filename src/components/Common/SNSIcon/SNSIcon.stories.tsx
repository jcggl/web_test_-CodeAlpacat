import { ComponentMeta, ComponentStory } from "@storybook/react";

import SNSIcon from "./SNSIcon";
import linkedin from "../../../assets/svg/linkedin-lg.svg";

export default {
  title: "Components/Common/SNSIcon",
  component: SNSIcon,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "1rem 1rem 1rem 1rem",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "SNSIcon Component",
  },
} as ComponentMeta<typeof SNSIcon>;

export const Default: ComponentStory<typeof SNSIcon> = (args) => <SNSIcon {...args} />;

Default.args = {
  href: "#",
  alt: "#",
  imgSrc: linkedin,
};
