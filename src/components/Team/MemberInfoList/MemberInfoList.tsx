import React from "react";
import { members } from "@/constants/Members/members";
import { MemberInfo } from "@/components/Team";

const MemberInfoList = () => {
  return (
    <div className="grid mobile:grid-rows-12 pad:grid-cols-3 mobile:gap-y-[3.375rem] pad:gap-y-[4.81rem] desktop:gap-y-[7.375rem] pad:gap-x-[3.56rem] desktop:gap-x-[5.625rem] w-full mobile:mt-52pxr pad:mt-77pxr desktop:mt-122pxr">
      {members.map((member, index) => {
        return (
          <div
            key={`memberKey${index}${String(Math.random())}`}
            className="mobile:w-260pxr pad:w-261pxr desktop:w-410pxr"
          >
            <MemberInfo {...member} />
          </div>
        );
      })}
    </div>
  );
};

export default MemberInfoList;
