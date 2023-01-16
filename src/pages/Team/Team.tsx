import React from "react";
import {
  TeamHeader,
  MemberCardList,
  GroupPicture,
  MemberInfoList,
} from "@/components/Team";

const Team = () => {
  return (
    <section className="mx-auto w-[clamp(260px,72.222vw,893px)] pad:w-[clamp(893px,82.685vw,1402px)] desktop:w-[clamp(1320px,68.750vw,100vw)] pt-[clamp(95px,26.389vw,109px)] pad:pt-[clamp(109px,10.093vw,175px)] desktop:pt-[clamp(186px,9.688vw,100vw)] pb-[clamp(59px,16.389vw,99px)] pad:pb-[clamp(99px,9.167vw,224px)] desktop:pb-[clamp(374px,19.479vw,100vw)]">
      <TeamHeader />
      <MemberCardList />
      <GroupPicture />
      <MemberInfoList />
    </section>
  );
};

export default Team;
