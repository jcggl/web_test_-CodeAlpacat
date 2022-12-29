import { ComponentMeta, ComponentStory } from "@storybook/react";

import Carousel from "./Carousel";
import { kikitownImageList } from "./../../../constants/Images/kikitown-image-list";

export default {
  title: "Components/Product/Carousel",
  component: Carousel,
  parameters: {
    componentSubtitle: "Carousel Component",
  },
} as ComponentMeta<typeof Carousel>;

export const Default: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

Default.args = {
  imageList: kikitownImageList
};
