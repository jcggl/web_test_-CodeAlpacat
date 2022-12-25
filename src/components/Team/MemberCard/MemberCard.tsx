import React from "react";
import logo from "../../../assets/logo/logo.png";

import { MemberCardType } from "./MemberCard.types";
import MemberInfo from './../MemberInfo/MemberInfo';

const MemberCard = ({
  imgSrc = logo,
  job = "CEO / Co-Founder",
  name = "이름을 입력하세요.",
  href = "",
  alt = "인물",
  hasLinkedIn = true
}:MemberCardType) => {
  return (
    <div className="w-410pxr h-602pxr">
      <img src={imgSrc} alt={alt} className="aspect-[41/49]" />
      <div className="mt-18pxr">
        <MemberInfo
          job={job}
          name={name}
          href={href}
          hasLinkedIn={hasLinkedIn}
        />
      </div>
    </div>
  );
};

export default MemberCard;
