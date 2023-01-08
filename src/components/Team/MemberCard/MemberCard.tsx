import React from "react";
import logo from "@/assets/logo/logo.svg";
import MemberInfo from "@/components/Team/MemberInfo/MemberInfo";

import { MemberCardType } from "./MemberCard.types";

const MemberCard = ({
  imgSrc = logo,
  role = "CEO / Co-Founder",
  name = "이름을 입력하세요.",
  href = "",
  alt = "인물",
  hasLinkedIn = true,
}: MemberCardType) => {
  return (
    <div className="w-[clamp(260px,72vw,100vw)] pad:w-[clamp(261px,24.167vw,410px)] desktop:w-[clamp(410px,21.354vw,100vw)]">
      <img
        src={imgSrc}
        alt={alt}
        className="aspect-[41/49] w-[clamp(260px,72vw,100vw)] pad:w-[clamp(261px,24.167vw,410px)] desktop:w-[clamp(410px,21.354vw,100vw)]"
      />
      <div className="mt-[clamp(5px,1.389vw,11px)] pad:mt-[clamp(11px,1.109vw,18px)] desktop:mt-[clamp(18px,0.938vw,25px)]">
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
