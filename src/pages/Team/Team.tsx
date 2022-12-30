import React from "react";

import MemberInfoScreen from "./Screens/MemberInfoScreen";
import GroupPictureScreen from "./Screens/GroupPictureScreen";
import MemberCardScreen from "./Screens/MemberCardScreen";
import TeamHeader from "./Screens/TeamHeader";

const Team = () => {
  return (
    <section className="mx-auto mobile:pt-95pxr mobile:w-260pxr pad:w-893pxr desktop:w-1402pxr pad:pt-109pxr desktop:pt-175pxr mobile:pb-59pxr pad:pb-99pxr desktop:pb-224pxr">
      <TeamHeader/>
      <MemberCardScreen/>
      <GroupPictureScreen/>
      <MemberInfoScreen/>
    </section>
  );
};

export default Team;
