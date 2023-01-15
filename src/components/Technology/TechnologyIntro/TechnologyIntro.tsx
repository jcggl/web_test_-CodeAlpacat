import React from "react";

const TechnologyIntro = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen min-h-[640px] pad:min-h-[768px] desktop:min-h-[1080px]">
      <h3 className="flex text-black font-spline tracking-[.01em] font-bold text-center pt-[clamp(73px,20.278vw,100px)] pad:pt-[clamp(100px,9.259vw,114px)] desktop:pt-[clamp(372px,19.375vw,100vw)] text-[clamp(32px,8.889vw,65px)] pad:text-[clamp(65px,6.019vw,100px)] desktop:text-[clamp(85px,4.427vw,100vw)] leading-[140%]">
        Your face, voice, or words.
        <br />
        We can handle it all.
      </h3>
      <h4 className="flex text-center text-black pt-[clamp(73px,20.278vw,100px)] pad:pt-[clamp(100px,9.259vw,114vw)] desktop:pt-[clamp(120px,6.25vw,100vw)] px-[clamp(35px,9.772vw,40px)] pad:px-[0px] text-[clamp(14px,3.889vw,20px)] pad:text-[clamp(20px,1.852vw,34px)] desktop:text-[clamp(30px,1.563vw,100vw)] leading-[143%] pad:leading-[140%] desktop:leading-[166%]">
        Animate your avatar using your video, microphone, or text input.
        <br />
        Our cloud-based real-time avatar motion API will let you integrate it in
        no time.
      </h4>
    </div>
  );
};

export default TechnologyIntro;
