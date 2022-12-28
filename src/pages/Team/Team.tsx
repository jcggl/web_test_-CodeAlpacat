import React from "react";
import { MemberCardList } from "@/components/Team";
import members from "@/assets/members/members.png";
import { MemberInfoList } from "@/components/Team";
const Team = () => {
  return (
    <section className="mx-auto mobile:pt-95pxr mobile:w-260pxr pad:w-893pxr desktop:w-1402pxr pad:pt-109pxr desktop:pt-175pxr mobile:pb-59pxr pad:pb-99pxr desktop:pb-224pxr">
      <h3 className="flex justify-center items-center font-black font-spline font-semibold mobile:h-30pxr pad:h-97pxr mobile:text-[1.5625rem] pad:text-[3.125rem] desktop:text-[5.375rem]">
        Team
      </h3>
      <div className="grid mobile:grid-rows-12 pad:grid-cols-3 place-items-center mobile:gap-x-[0] pad:gap-x-[3.4rem] desktop:gap-x-[5.375rem] mobile:gap-y-[40.78px] pad:gap-y-[0] mobile:pt-81pxr pad:pt-49pxr desktop:pt-152pxr">
        <MemberCardList />
      </div>
      <img
        className="w-full aspect-[1402/942] mobile:mt-40pxr pad:mt-72pxr desktop:mt-150pxr"
        src={members}
        alt="그룹 사진"
      />
      <div className="grid mobile:grid-rows-12 pad:grid-cols-3 mobile:gap-y-[3.375rem] pad:gap-y-[4.81rem] desktop:gap-y-[7.375rem] pad:gap-x-[3.56rem] desktop:gap-x-[5.625rem] w-full mobile:mt-52pxr pad:mt-77pxr desktop:mt-122pxr">
        <MemberInfoList />
      </div>
    </section>
  );
};

export default Team;
