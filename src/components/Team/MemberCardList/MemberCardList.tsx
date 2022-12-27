import React from "react";
import { MemberCard } from "@/components/Team";
import { founders } from "@/constants/Members/founders";

const MemberCardList = () => {
  return (
    <React.Fragment>
        {founders.map((founder, index) => {
          return <MemberCard key={`founderKey${index}`} {...founder} />;
        })}
    </React.Fragment>
  );
};

export default MemberCardList;
