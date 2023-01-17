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
    <div className="w-[clamp(216.88px,60.244vw,300px)] pad:w-[clamp(199.35px,18.458vw,410px)] desktop:w-[clamp(340.53px,17.736vw,100vw)]">
      <img
        src={imgSrc}
        alt={alt}
        className="aspect-[340.5/407] w-[clamp(216.88px,60.244vw,300px)] pad:w-[clamp(199.35px,18.458vw,410px)] desktop:w-[clamp(340.53px,17.736vw,100vw)]"
      />
      <div className="w-[clamp(216.88px,60.244vw,300px)] pad:w-[clamp(199.35px,18.458vw,410px)] desktop:w-[clamp(340.53px,17.736vw,100vw)] mt-[clamp(5px,1.389vw,11px)] pad:mt-[clamp(7.76px,0.719vw,12px)] desktop:mt-[clamp(15px,0.781vw,25px)]">
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
