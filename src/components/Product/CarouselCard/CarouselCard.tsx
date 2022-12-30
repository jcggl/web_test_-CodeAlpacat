import React from "react";
import Carousel from "../Carousel/Carousel";
import { CarouselCardType } from "./CarouselCard.types";
import { kikitownImageList } from "./../../../constants/Images/kikitown-image-list";
import longArrowRight from "../../../assets/common/long-arrow-right.png";

const CarouselCard = ({
  imageList = kikitownImageList,
  linkTitle = "Coming Soon!",
  href = "#",
  title = "Title",
  subTitle = "Subtitle",
  description = "Description",
  textBoxWidth = "w-full"
}: CarouselCardType) => {
  const linkFontStyle = linkTitle === "Coming Soon!" && linkTitle ? "text-[#979797]" : "text-black";

  return (
    <div>
      <Carousel imageList={imageList} />
      <div className="mobile:w-320pxr pad:w-850pxr desktop:w-1240pxr mx-auto">
        <div className="flex justify-end mobile:mt-5pxr pad:mt-8pxr">
          <a
            className={`flex items-center ${linkFontStyle} font-medium mobile:text-[0.625rem] pad:text-[1rem] desktop:text-[1.5rem]`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkTitle}
            {linkTitle !== "Coming Soon!" && linkTitle ? (
              <img
                className="mobile:ml-4pxr pad:ml-10pxr desktop:ml-11pxr mobile:w-11pxr mobile:h-9pxr pad:w-20pxr pad:h-13pxr desktop:w-34pxr desktop:h-20pxr"
                src={longArrowRight}
                alt=""
              />
            ) : null}
          </a>
        </div>
        <div className={textBoxWidth}>
          <h3 className="text-black font-bold mobile:my-4pxr pad:mb-6pxr desktop:my-8pxr mobile:text-[0.9375rem] pad:text-[2rem] desktop:text-[2.625rem] mobile:leading-[1.25rem] pad:leading-[1.75rem] desktop:leading-[2.75rem]">
            {title}
          </h3>
          <h4 className="text-black font-semibold mobile:text-[0.8125rem] pad:text-[1.25rem] desktop:text-[1.625rem] mobile:leading-[1rem] pad:leading-[1.375rem] desktop:leading-[2.75rem]">
            {subTitle}
          </h4>
          <p className="text-black mobile:text-[0.625rem] pad:text-[1.0625rem] desktop:text-[1.375rem] mobile:leading-[0.875rem] pad:leading-[1.375rem] desktop:leading-[1.875rem]">
            <br />
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
