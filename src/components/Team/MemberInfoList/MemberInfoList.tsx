import React from "react";
import { members } from "@/constants/Members/members";
import { MemberInfo } from '@/components/Team';

const MemberInfoList = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default MemberInfoList;
