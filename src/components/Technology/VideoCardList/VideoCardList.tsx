import React from "react";
import { solutions } from "@/constants/OurSolutions/ourSolutions";
import { VideoCard } from '@/components/Technology';

type Props = {};

const VideoCardList = (props: Props) => {
  return (
    <div>
      {solutions.map((solution, index) => {
        return (
          <div key={`VideoCardKey${index}`} className="mobile:mb-33pxr pad:mb-81pxr desktop:mb-170pxr">
            <VideoCard
              {...solution}
              isEven={index % 2 === 0}
            />
          </div>
        );
      })}
    </div>
  );
};

export default VideoCardList;
