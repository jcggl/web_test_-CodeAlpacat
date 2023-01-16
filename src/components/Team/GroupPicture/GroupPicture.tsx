import React from 'react'
import members from "@/assets/members/members.webp";

type Props = {}

const GroupPicture = (props: Props) => {
  return (
    <img
      className="w-full aspect-[1402/942] mt-[clamp(40px,11.111vw,72px)] pad:mt-[clamp(107.3px,9.935vw,150px)] desktop:mt-[clamp(218px,11.354vw,250px)]"
      src={members}
      alt="그룹 사진"
    />
  );
}

export default GroupPicture