import React from 'react'
import members from "@/assets/members/members.webp";

type Props = {}

const GroupPicture = (props: Props) => {
  return (
    <React.Fragment>
      <img
        className="w-full aspect-[1402/942] mt-[clamp(40px,11.111vw,72px)] pad:mt-[clamp(72px,6.667vw,150px)] desktop:mt-[clamp(218px,11.354vw,250px)]"
        src={members}
        alt="그룹 사진"
      />
    </React.Fragment>
  );
}

export default GroupPicture