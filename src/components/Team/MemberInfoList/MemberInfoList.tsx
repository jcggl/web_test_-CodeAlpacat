import React from "react";
import { members } from "@/constants/Members/members";
import { MemberInfo } from "@/components/Team";

const MemberInfoList = () => {
  return (
    <div className="grid grid-rows-12 pad:grid-cols-3 gap-y-[clamp(54px,14.167vw,77px)] pad:gap-y-[clamp(52.83px,4.892vw,118px)] desktop:gap-y-[clamp(118px,6.146vw,100vw)] pad:gap-x-[clamp(59.31px,5.492vw,300px)] desktop:gap-x-[clamp(166.76px,8.685vw,100vw)] w-full mt-[clamp(52px,14.444vw,77px)] pad:mt-[clamp(52.28px,4.841vw,122px)] desktop:mt-[clamp(95px,4.948vw,100vw)]">
      {members.map((member, index) => {
        return (
          <div
            key={`memberKey${index}${String(Math.random())}`}
            className="mx-auto w-[clamp(256.89px,71.358vw,300px)] pad:w-[clamp(210px,19.444vw,450px)] desktop:w-[clamp(410px,21.354vw,100vw)]"
          >
            <MemberInfo
              {...member}
              mobileIconWidth="w-[clamp(22.5px,6.250vw,30.5px)]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MemberInfoList;
