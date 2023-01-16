import React from "react";

import SNSIcon from "@/components/Common/SNSIcon/SNSIcon";
import linkedin from "@/assets/svg/linkedIn.svg";

import { MemberInfoType } from "./MemberInfo.types";

const MemberInfo = ({
  role = "CEO / Co-Founder",
  name = "이름을 입력하세요.",
  href = "",
  hasLinkedIn = true,
}:MemberInfoType) => {
  return (
    <div className="flex flex-col justify-center w-[clamp(260px,72vw,100vw)] pad:w-[clamp(261px,24.167vw,410px)] desktop:w-[clamp(340.53px,17.736vw,100vw)]">
      <h5 className="text-[clamp(11px,3.056vw,14px)] pad:text-[clamp(14px,1.296vw,22px)] desktop:text-[clamp(18px,0.938vw,100vw)] leading-[200%] pad:leading-[180%] desktop:leading-[200%]">
        {role}
      </h5>
      <div className="flex justify-between">
        <h4 className="font-medium text-black text-[clamp(18px,5vw,22px)] pad:text-[clamp(22px,2.037vw,36px)] desktop:text-[clamp(30px,1.563vw,100vw)] leading-[120%]">
          {name}
        </h4>
        {hasLinkedIn ? (
          <div className="w-[clamp(22.5px,6.250vw,40.5px)] pad:w-[clamp(25.84px,2.393vw,40.5px)] desktop:w-[clamp(33.64px,1.752vw,45px)]">
            <SNSIcon href={href} imgSrc={linkedin} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MemberInfo;
