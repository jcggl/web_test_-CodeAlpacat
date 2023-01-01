import React from "react";
import { VideoCardType } from "./VideoCard.types";
import Video from "./../Video/Video";

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
      className={`mx-auto flex mobile:flex-col ${zigZagLayout} desktop:justify-between mobile:w-272pxr pad:w-710pxr desktop:w-1558pxr`}
    >
      <div className="mobile:272pxr pad:w-710pxr desktop:w-910pxr mobile:h-[9.53125rem] pad:h-400pxr desktop:h-510pxr">
        <Video
          src={src}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
          controls={controls}
        />
      </div>
      <div className="flex flex-col desktop:justify-center desktop:w-580pxr mobile:h-86pxr pad:h-98pxr desktop:h-auto">
        <h3 className="font-bold desktop:w-450pxr mobile:text-[0.875rem] pad:text-[1.625rem] desktop:text-[2.625rem] mobile:leading-[1rem] pad:leading-[1.125rem] desktop:leading-[3.25rem] mobile:my-[0.90625rem] pad:my-25pxr desktop:my-[0px]">
          {title}
        </h3>
        <h4 className="mobile:text-[0.75rem] pad:text-[1.125rem] desktop:text-[1.4375rem] mobile:leading-[1rem] pad:leading-[1.375rem] desktop:leading-[2rem] desktop:w-583pxr">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default VideoCard;
