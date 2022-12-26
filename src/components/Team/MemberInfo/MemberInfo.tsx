import React from "react";
import SNSIcon from "./../../Common/SNSIcon/SNSIcon";
import linkedin from "../../../assets/svg/linkedin-grey.svg";

const MemberInfo = ({
  job = "CEO / Co-Founder",
  name = "이름을 입력하세요.",
  href = "",
  hasLinkedIn = true,
}) => {
  return (
    <div className="flex flex-col justify-center relative w-392pxr h-94pxr">
      <h5 className="text-[1.375rem] leading-[2.75rem]">{job}</h5>
      <h4 className="text-[2.25rem] font-medium leading-[2.75rem]">{name}</h4>
      {hasLinkedIn ? (
        <div className="absolute bottom-[6px] right-[-11px] w-40pxr h-40pxr">
          <SNSIcon href={href} imgSrc={linkedin} />
        </div>
      ) : null}
    </div>
  );
};

export default MemberInfo;
