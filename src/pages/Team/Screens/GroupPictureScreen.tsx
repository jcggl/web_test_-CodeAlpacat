import React from 'react'
import members from "@/assets/members/members.png";

type Props = {}

const GroupPictureScreen = (props: Props) => {
  return (
    <React.Fragment>
      <img
        className="w-full aspect-[1402/942] mobile:mt-40pxr pad:mt-72pxr desktop:mt-150pxr"
        src={members}
        alt="그룹 사진"
      />
    </React.Fragment>
  );
}

export default GroupPictureScreen