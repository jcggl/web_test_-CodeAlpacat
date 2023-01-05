import { ComponentMeta, ComponentStory } from "@storybook/react";

import CarouselCard from "./CarouselCard";
import { kikitownImageList } from "../../../constants/Images/kikitown-image-list";

export default {
  title: "Components/Product/CarouselCard",
  component: CarouselCard,
  parameters: {
    componentSubtitle: "CarouselCard Component",
  },
} as ComponentMeta<typeof CarouselCard>;

export const Default: ComponentStory<typeof CarouselCard> = (args) => (
  <CarouselCard {...args} />
);

Default.args = {
  imageList: kikitownImageList,
  linkTitle: "Coming Soon!",
  href: "#",
  title: "Title",
  subTitle: "Subtitle",
  description: "Description",
};
