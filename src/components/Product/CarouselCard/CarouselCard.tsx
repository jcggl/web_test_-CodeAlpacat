import React from "react";

import Carousel from "@/components/Product/Carousel/Carousel";
import { kikitownImageList } from "@/constants/Images/kikitown-image-list";
import longArrowRight from "@/assets/common/long-arrow-right.svg";

import { CarouselCardType } from "./CarouselCard.types";

const CarouselCard = ({
  imageList = kikitownImageList,
  linkTitle = "coming soon!",
  href = "#",
  title = "Title",
  subTitle = "Subtitle",
  description = "Description",
}: CarouselCardType) => {
  const linkFontStyle = linkTitle === "coming soon!" && linkTitle ? "text-[#979797]" : "text-black";

  return (
    <div>
      <Carousel imageList={imageList} />
      <div className="w-[clamp(320px,88.889vw,850px)] pad:w-[clamp(717.35px,66.421vw,1240px)] desktop:w-[clamp(1000px,52.083vw,100vw)] mx-auto">
        <div className="flex justify-end mt-[clamp(5px,1.389vw,10px)] pad:mt-[0px]">
          <a
            className={`flex items-center ${linkFontStyle} text-[clamp(10px,2.778vw,16px)] pad:text-[clamp(14px,1.296vw,24px)] desktop:text-[clamp(20px,1.042vw,100vw)]`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkTitle}
            {linkTitle !== "coming soon!" && linkTitle ? (
              <img
                className="ml-[clamp(4px,1.111vw,8px)] pad:ml-[clamp(6px,0.556vw,20px)] desktop:ml-[clamp(6px,0.313vw,100vw)] w-[clamp(11px,3.056vw,20px)] pad:w-[clamp(15.25px,1.412vw,34px)] desktop:w-[clamp(22px,1.146vw,51px)]"
                src={longArrowRight}
                alt="Long Right Arrow"
              />
            ) : null}
          </a>
        </div>
        <div className="desktop:pt-[clamp(29px,1.51vw,100vw)]">
          <h3 className="text-black font-bold my-[clamp(4px,1.111vw,8px)] pad:mt-[clamp(16px,1.481vw,30px)] desktop:my-[clamp(8px,0.417vw,100vw)] text-[clamp(15px,4.167vw,32px)] pad:text-[clamp(30px,2.778vw,42px)] desktop:text-[clamp(36px,1.875vw,100vw)] leading-[130%] pad:leading-[90%] desktop:leading-[110%]">
            {title}
          </h3>
          <h4 className="text-black font-medium text-[clamp(13px,3.611vw,20px)] pad:text-[clamp(18px,1.667vw,26px)] desktop:text-[clamp(24px,1.25vw,100vw)] leading-[120%] pad:leading-[155%] desktop:leading-[160%]">
            {subTitle}
          </h4>
          <p className="text-black text-[clamp(10px,2.778vw,17px)] pad:text-[clamp(14px,1.296vw,22px)] desktop:text-[clamp(18px,0.938vw,100vw)] leading-[130%] desktop:leading-[160%] pad:pt-[clamp(9px,0.833vw,15px)] desktop:pt-[clamp(15px,0.781vw,100vw)]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
