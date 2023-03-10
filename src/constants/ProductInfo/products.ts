import { CarouselCardType } from "@/components/Product/CarouselCard/CarouselCard.types";
import { beergangImageList } from "@/constants/Images/beergang-image-list";
import { kikitownImageList } from "@/constants/Images/kikitown-image-list";
import { marionetteImageList } from "@/constants/Images/marionette-image-list";
// import kikitown from "@/assets/product/kikitown1.webp";
// import marionette from "@/assets/product/kikitown1.webp";
// import beergang from "@/assets/product/kikitown1.webp";

export const products: CarouselCardType[] = [
  {
    imageList: kikitownImageList,
    videoSrc: "videos/kiki_video.mp4",
    iosVideoSrc: "videos/kiki_video.mp4",
    href: "https://www.kiki.town/",
    title: "Kiki Town",
    subTitle: "Off with your video, On with your avatar!",
    description:
      "A place where you feel comfortable and private, no matter how you look and what you're talking about.",
  },
  {
    imageList: marionetteImageList,
    videoSrc: "videos/marionette_video.mp4",
    iosVideoSrc: "videos/marionette_video.mp4",
    href: "#",
    title: "Marionette API",
    subTitle: "Make your avatar alive with your face and voice.",
    description:
      "Our cloud-based real-time avatar motion API lets developers quickly and easily apply our product, which allows users to animate their avatars only with webcam, audio, or text input.",
  },
  {
    imageList: beergangImageList,
    videoSrc: "videos/beergang_video.mp4",
    iosVideoSrc: "videos/beergang_video.mp4",
    href: "https://www.beergang.xyz/",
    title: "Beergang NFT",
    subTitle: "The world’s first emotionally interactive full-body 3D avatar.",
    description:
      "Beergang is a collection avatars built on the Homebrew Algorithm and stored on blockchain network and IPFS. Using beer and pub culture as a motif.",
  },
];