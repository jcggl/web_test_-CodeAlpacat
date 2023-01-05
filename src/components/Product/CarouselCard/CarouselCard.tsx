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
}: CarouselCardType) => {
  const linkFontStyle = linkTitle === "Coming Soon!" && linkTitle ? "text-[#979797]" : "text-black";

  return (
    <div>
      <Carousel imageList={imageList} />
      <div className="w-[clamp(320px,88.889vw,850px)] pad:w-[clamp(850px,78.704vw,1240px)] desktop:w-[clamp(1240px,64.583vw,100vw)] mx-auto">
        <div className="flex justify-end mt-[clamp(5px,1.389vw,10px)] pad:mt-[clamp(8px,0.741vw,16px)]">
          <a
            className={`flex items-center ${linkFontStyle} font-medium text-[clamp(10px,2.778vw,16px)] pad:text-[clamp(16px,1.481vw,24px)] desktop:text-[clamp(24px,1.250vw,100vw)]`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkTitle}
            {linkTitle !== "Coming Soon!" && linkTitle ? (
              <img
                className="ml-[clamp(4px,1.111vw,8px)] pad:ml-[clamp(10px,0.926vw,20px)] desktop:ml-[clamp(11px,0.573vw,100vw)] w-[clamp(11px,3.056vw,20px)] pad:w-[clamp(20px,1.852vw,34px)] desktop:w-[clamp(34px,1.771vw,51px)] h-[clamp(9px,2.5vw,13px)] pad:h-[clamp(13px,1.204vw,20px)] desktop:h-[clamp(20px,1.042vw,30px)]"
                src={longArrowRight}
                alt="Long Right Arrow"
              />
            ) : null}
          </a>
        </div>
        <div className="w-[clamp(320px,88.889vw,850px)] pad:w-[clamp(850px,78.704vw,1240px)] desktop:w-[clamp(1240px,64.583vw,100vw)]">
          <h3 className="text-black font-bold my-[clamp(4px,1.111vw,8px)] pad:mb-[clamp(6px,0.556vw,12px)] desktop:my-[clamp(8px,0.417vw,100vw)] text-[clamp(15px,4.167vw,32px)] pad:text-[clamp(32px,2.963vw,42px)] desktop:text-[clamp(42px,2.188vw,100vw)] leading-[130%] pad:leading-[100%]">
            {title}
          </h3>
          <h4 className="text-black font-semibold text-[clamp(13px,3.611vw,20px)] pad:text-[clamp(20px,1.852vw,26px)] desktop:text-[clamp(26px,1.354vw,100vw)] leading-[120%] pad:leading-[110%] desktop:leading-[120%]">
            {subTitle}
          </h4>
          <p className="text-black text-[clamp(10px,2.778vw,17px)] pad:text-[clamp(17px,1.574vw,22px)] desktop:text-[clamp(22px,1.146vw,100vw)] leading-[130%]">
            <br />
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
