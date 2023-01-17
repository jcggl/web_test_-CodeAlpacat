import React from "react";
import { MemberCard } from "@/components/Team";
import { founders } from "@/constants/Members/founders";

const MemberCardList = () => {
  return (
    <div className="grid grid-rows-12 pad:grid-cols-3 place-items-center gap-x-[0] pad:gap-x-[clamp(59.65px,5.523vw,86px)] desktop:gap-x-[clamp(149.5px,7.786vw,179.4px)] gap-y-[clamp(40.78px,11.328vw,100vw)] pad:gap-y-[0] desktop:gap-y-[clamp(117px,6.094vw,140.4px)] pt-[clamp(81px,22.5vw,100px)] pad:pt-[clamp(107px,9.907vw,152px)] desktop:pt-[clamp(139px,7.24vw,166.8px)]">
      {founders.map((founder, index) => {
        return <MemberCard key={`founderKey${index}`} {...founder} />;
      })}
    </div>
  );
};

export default MemberCardList;
