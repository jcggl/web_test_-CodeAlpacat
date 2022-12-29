import React from "react";
import Carousel from "../Carousel/Carousel";
import { CarouselCardType } from "./CarouselCard.types";
import { kikitownImageList } from "./../../../constants/Images/kikitown-image-list";
import longArrowRight from '../../../assets/common/long-arrow-right.png';

const CarouselCard = ({
  imageList = kikitownImageList,
  linkTitle = "Coming Soon!",
  href = "#",
  title = "Title",
  subTitle = "Subtitle",
  description = "Description",
}: CarouselCardType) => {
  return (
    <div>
      <Carousel imageList={imageList} />
      <div className="mobile:w-320pxr pad:w-850pxr desktop:w-1240pxr mx-auto">
        <div className="flex justify-end">
          <a
            className="flex"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkTitle}
            <img className="desktop:w-34pxr aspect-[34/20]" src={longArrowRight} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
