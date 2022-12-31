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
      className={`mx-auto flex mobile:flex-col ${zigZagLayout} desktop:justify-between desktop:w-1558pxr`}
    >
      <div className="desktop:w-910pxr desktop:h-510pxr">
        <Video
          src={src}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
          controls={controls}
        />
      </div>
      <div className="flex flex-col justify-center desktop:w-580pxr">
        <h3 className="font-bold desktop:text-[2.625rem] desktop:leading-[3.25rem] desktop:w-450pxr">
          {title}
        </h3>
        <br />
        <h4 className="desktop:text-[1.4375rem] desktop:leading-[2rem] desktop:w-583pxr">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default VideoCard;
