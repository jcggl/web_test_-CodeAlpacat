import { ComponentMeta, ComponentStory } from "@storybook/react";

import MemberCard from './MemberCard';
import logo from '../../../assets/logo/logo.png';

export default {
  title: "Components/Team/MemberCard",
  component: MemberCard,
  parameters: {
    componentSubtitle: "MemberCard Component",
  },
} as ComponentMeta<typeof MemberCard>;

export const Default: ComponentStory<typeof MemberCard> = (args) => (
  <MemberCard {...args} />
);

Default.args = {
  imgSrc: logo,
  job: "CEO / Co-Founder",
  name: "이름을 입력하세요.",
  href: "",
  alt: "인물",
  hasLinkedIn: true
};
