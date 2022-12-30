import { CarouselCardType } from "@/components/Product/CarouselCard/CarouselCard.types";
import { beergangImageList } from "../Images/beergang-image-list";
import { kikitownImageList } from "../Images/kikitown-image-list";
import { marionetteImageList } from "../Images/marionette-image-list";

export const products: CarouselCardType[] = [
  {
    imageList: kikitownImageList,
    linkTitle: "Go to Kiki Town",
    href: "https://www.kiki.town/",
    title: "Kiki Town",
    subTitle: "Off with your video, On with your avatar!",
    description:
      "A place where you feel comfortable and private, no matter how you look and what you're talking about.",
    textBoxWidth: "desktop:w-559pxr",
  },
  {
    imageList: marionetteImageList,
    href: "#",
    title: "Marionette API",
    subTitle: "Make your avatar alive with your face and voice.",
    description:
      "Our cloud-based real-time avatar motion API lets developers quickly and easily apply our product, which allows users to animate their avatars only with webcam, audio, or text input.",
    textBoxWidth: "desktop:w-639pxr",
  },
  {
    imageList: beergangImageList,
    linkTitle: "Go to Beergang",
    href: "https://www.beergang.xyz/",
    title: "Beergang NFT",
    subTitle: "The world’s first emotionally interactive full-body 3D avatar.",
    description:
      "Beergang is a collection avatars built on the Homebrew Algorithm and stored on blockchain network and IPFS. Using beer and pub culture as a motif.",
    textBoxWidth: "desktop:w-627pxr",
  },
];