import React from "react";
import SNSIcon from "./../../Common/SNSIcon/SNSIcon";
import linkedin from "../../../assets/svg/linkedIn.svg";
import { MemberInfoType } from "./MemberInfo.types";

const MemberInfo = ({
  role = "CEO / Co-Founder",
  name = "이름을 입력하세요.",
  href = "",
  hasLinkedIn = true,
}:MemberInfoType) => {
  return (
    <div className="flex flex-col justify-center mobile:h-42pxr pad:h-60pxr desktop:h-94pxr">
      <h5 className="mobile:text-[0.6875rem] pad:text-[0.875rem] desktop:text-[1.375rem] mobile:leading-[1.375rem] pad:leading-[1.625rem] desktop:leading-[2.75rem]">
        {role}
      </h5>
      <div className="flex justify-between">
        <h4 className="mobile:text-[1.125rem] pad:text-[1.375rem] desktop:text-[2.25rem] font-[500] mobile:leading-[1.375rem] pad:leading-[1.625rem] desktop:leading-[2.75rem] text-black">
          {name}
        </h4>
        {hasLinkedIn ? (
          <div className="mobile:w-[1.4rem] pad:w-[1.615rem] desktop:w-[2.53125rem] mr-3pxr">
            <SNSIcon href={href} imgSrc={linkedin} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MemberInfo;
