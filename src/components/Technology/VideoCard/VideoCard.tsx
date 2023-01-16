import React from "react";
import Video from "@/components/Technology/Video/Video";

import { VideoCardType } from "./VideoCard.types";
import useResize from '@/hooks/useResize';

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
  const { width } = useResize();
  const titleList:string[] = title.split(" ");
  const zigZagLayout = isEven ? "desktop:flex-row" : "desktop:flex-row-reverse";
  return (
    <div
      className={`mx-auto flex flex-col items-center ${zigZagLayout} desktop:justify-between w-[clamp(272px,75.556vw,710px)] pad:w-[clamp(710px,65.741vw,1558px)] desktop:w-[clamp(1400px,72.917vw,100vw)]`}
    >
      <div className="w-[clamp(272px,75.556vw,710px)] pad:w-[clamp(710px,65.741vw,910px)] desktop:w-[clamp(880px,45.833vw,100vw)]">
        <Video
          src={src}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
          controls={controls}
        />
      </div>
      <div className="flex flex-col desktop:justify-center w-[clamp(272px,75.556vw,710px)] pad:w-[clamp(710px,65.741vw,910px)]  desktop:w-[clamp(455px,23.698vw,100vw)]">
        <h3 className="font-bold text-[clamp(14px,3.889vw,26px)] pad:text-[clamp(24px,2.222vw,42px)] desktop:text-[clamp(40px,2.083vw,100vw)] leading-[110%] pad:leading-[140%] desktop:leading-[130%] my-[clamp(14.5px,4.028vw,25px)] pad:my-[clamp(10px,0.926vw,24px)] desktop:my-[clamp(24px,1.25vw,100vw)]">
          {width >= 1920 ? (
            <>
              {titleList[0]}
              <br />
              {titleList.slice(1, 4).join(" ")}
            </>
          ) : (
            title
          )}
        </h3>
        <h4 className="text-[clamp(12px,3.333vw,18px)] pad:text-[clamp(14px,1.296vw,23px)] desktop:text-[clamp(20px,1.042vw,100vw)] leading-[130%] pad:leading-[120%] desktop:leading-[150%]">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default VideoCard;
