import React from "react";
import { solutions } from "@/constants/OurSolutions/ourSolutions";
import { VideoCard } from '@/components/Technology';

const VideoCardList = () => {
  return (
    <div>
      {solutions.map((solution, index) => {
        return (
          <div
            key={`VideoCardKey${index}`}
            className="mb-[clamp(33px,9.167vw,81px)] pad:mb-[clamp(81px,7.5vw,170px)] desktop:mb-[clamp(170px,8.854vw,100vw)]"
          >
            <VideoCard {...solution} isEven={index % 2 === 0} />
          </div>
        );
      })}
    </div>
  );
};

export default VideoCardList;
