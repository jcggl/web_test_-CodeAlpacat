import React from 'react'
import members from "@/assets/members/members.webp";

type Props = {}

const GroupPicture = (props: Props) => {
  return (
    <img
      className="w-full aspect-[1402/942] mt-[clamp(93.93px,26.092vw,140px)] pad:mt-[clamp(107.3px,9.935vw,150px)] desktop:mt-[clamp(218px,11.354vw,261.6px)]"
      src={members}
      alt="그룹 사진"
    />
  );
}

export default GroupPicture