import React from "react";
import { members } from "@/constants/Members/members";
import { MemberInfo } from "@/components/Team";

const MemberInfoList = () => {
  return (
    <div className="grid grid-rows-12 pad:grid-cols-3 gap-y-[clamp(54px,14.167vw,77px)] pad:gap-y-[clamp(77px,7.13vw,118px)] desktop:gap-y-[clamp(118px,6.146vw,100vw)] pad:gap-x-[clamp(57px,5.278vw,90px)] desktop:gap-x-[clamp(90px,4.688vw,100vw)] w-full mt-[clamp(52px,14.444vw,77px)] pad:mt-[clamp(77px,7.13vw,122px)] desktop:mt-[clamp(122px,6.354vw,100vw)]">
      {members.map((member, index) => {
        return (
          <div
            key={`memberKey${index}${String(Math.random())}`}
            className="w-[clamp(260px,72vw,100vw)] pad:w-[clamp(261px,24.167vw,410px)] desktop:w-[clamp(410px,21.354vw,100vw)]"
          >
            <MemberInfo {...member} />
          </div>
        );
      })}
    </div>
  );
};

export default MemberInfoList;
