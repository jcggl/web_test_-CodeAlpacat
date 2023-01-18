import React from 'react'
import comingSoon from "@/assets/svg/technology/coming-soon.svg";

const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black w-full h-full text-main-white gap-y-[clamp(13px,3.611vw,17px)] pad:gap-y-[clamp(25px,2.315vw,32px)] desktop:gap-y-[clamp(32px,1.042vw,38.4px)]">
      <img
        className="aspect-square w-[clamp(29px,8.056vw,36px)] pad:w-[clamp(60px,5.556vw,70px)] desktop:w-[clamp(70px,3.646vw,84px)]"
        src={comingSoon}
        alt="Coming soon"
      />
      <h3 className="font-bold text-[clamp(20px,5.556vw,28px)] pad:text-[clamp(36px,3.333vw,50px)] desktop:text-[clamp(50px,2.604vw,60px)]">
        Coming soon!
      </h3>
      <h4 className="text-sub-grey text-center text-[clamp(9px,2.5vw,14px)] pad:text-[clamp(12px,1.111vw,16px)] desktop:text-[clamp(16px,0.833vw,19.2px)] leading-[155%] pad:leading-[180%] desktop:leading-[162%]">
        We are currently working on creating examples of it
        <br />
        We'll be here soon. Stay tuned
      </h4>
    </div>
  );
}

export default ComingSoon