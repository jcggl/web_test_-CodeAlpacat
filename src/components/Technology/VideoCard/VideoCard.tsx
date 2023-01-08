import React from "react";
import Video from "@/components/Technology/Video/Video";

import { VideoCardType } from "./VideoCard.types";

const VideoCard = ({
  title = "Title",
  description = "Description",
  muted = true,
  autoPlay = false,
  loop = true,
  controls = false,
  src = "",
  isEven = false,
}: VideoCardType) => {
  const zigZagLayout = isEven ? "desktop:flex-row" : "desktop:flex-row-reverse"
  return (
    <div
      className={`mx-auto flex flex-col items-center ${zigZagLayout} desktop:justify-between w-[clamp(272px,75.556vw,710px)] pad:w-[clamp(710px,65.741vw,1558px)] desktop:w-[clamp(1558px,81.146vw,100vw)]`}
    >
      <div className="w-[clamp(272px,75.556vw,710px)] pad:w-[clamp(710px,65.741vw,910px)] desktop:w-[clamp(910px,47.396vw,100vw)]">
        <Video
          src={src}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
          controls={controls}
        />
      </div>
      <div className="flex flex-col desktop:justify-center w-[clamp(272px,75.556vw,710px)] pad:w-[clamp(710px,65.741vw,910px)]  desktop:w-[clamp(580px,30.208vw,100vw)]">
        <h3 className="font-bold desktop:w-[clamp(450px,23.438vw,100vw)] text-[clamp(14px,3.889vw,26px)] pad:text-[clamp(26px,2.407vw,42px)] desktop:text-[clamp(42px,2.188vw,100vw)] leading-[110%] desktop:leading-[120%] my-[clamp(14.5px,4.028vw,25px)] pad:my-[clamp(25px,2.315vw,100vw)] desktop:my-[0px]">
          {title}
        </h3>
        <h4 className="text-[clamp(12px,3.333vw,18px)] pad:text-[clamp(18px,1.667vw,23px)] desktop:text-[clamp(23px,1.198vw,100vw)] leading-[130%] pad:leading-[120%] desktop:leading-[140%] desktop:w-[clamp(583px,30.365vw,100vw)]">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default VideoCard;
