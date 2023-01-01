import React from "react";
import { MemberCard } from "@/components/Team";
import { founders } from "@/constants/Members/founders";

const MemberCardList = () => {
  return (
    <div className="grid mobile:grid-rows-12 pad:grid-cols-3 place-items-center mobile:gap-x-[0] pad:gap-x-[3.4rem] desktop:gap-x-[5.375rem] mobile:gap-y-[40.78px] pad:gap-y-[0] mobile:pt-81pxr pad:pt-49pxr desktop:pt-152pxr">
      {founders.map((founder, index) => {
        return <MemberCard key={`founderKey${index}`} {...founder} />;
      })}
    </div>
  );
};

export default MemberCardList;
