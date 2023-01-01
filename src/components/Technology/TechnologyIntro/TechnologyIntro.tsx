import React from "react";

const TechnologyIntro = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen mobile:min-h-[640px] pad:min-h-[768px] desktop:min-h-[1080px]">
      <h3 className="flex justify-center items-center text-black font-spline font-bold text-center mobile:w-324pxr pad:w-943pxr desktop:w-1407pxr mobile:pt-73pxr pad:pt-100pxr desktop:pt-114pxr mobile:text-[2rem] pad:text-[4.0625rem] desktop:text-[6.25rem] mobile:leading-[2.375rem] pad:leading-[5rem] desktop:leading-[7.5rem]">
        Your face, voice, or words.
        <br />
        We can handle it all.
      </h3>
      <h4 className="flex justify-center items-center text-center text-black mobile:w-291pxr pad:w-864pxr desktop:w-1301pxr mobile:pt-73pxr pad:pt-100pxr desktop:pt-114pxr mobile:text-[0.875rem] pad:text-[1.25rem] desktop:text-[2.125rem] pad:leading-[1.75rem] desktop:text-[1.625rem] mobile:leading-[1.25rem] pad:leading-[1.75rem] desktop:leading-[2.75rem]">
        Animate your avatar using your video, microphone, or text input.
        <br />
        Our cloud-based real-time avatar motion API will let you integrate it in
        no time.
      </h4>
    </div>
  );
};

export default TechnologyIntro;
