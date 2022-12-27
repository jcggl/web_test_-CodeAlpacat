import React from "react";
import logo from "../../../assets/logo/logo.png";

import { MemberCardType } from "./MemberCard.types";
import MemberInfo from './../MemberInfo/MemberInfo';

const MemberCard = ({
  imgSrc = logo,
  role = "CEO / Co-Founder",
  name = "이름을 입력하세요.",
  href = "",
  alt = "인물",
  hasLinkedIn = true
}:MemberCardType) => {
  return (
    <div className="mobile:w-260pxr pad:w-261pxr desktop:w-410pxr">
      <img src={imgSrc} alt={alt} className="aspect-[41/49]" />
      <div className="mobile:mt-5pxr pad:mt-11pxr desktop:mt-18pxr">
        <MemberInfo
          role={role}
          name={name}
          href={href}
          hasLinkedIn={hasLinkedIn}
        />
      </div>
    </div>
  );
};

export default MemberCard;
