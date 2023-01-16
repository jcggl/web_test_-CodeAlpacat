import React from "react";
import techsvg1 from "@/assets/svg/technology/tech-1.svg";
import techsvg2 from "@/assets/svg/technology/tech-2.svg";
import techsvg3 from "@/assets/svg/technology/tech-3.svg";

const TechnologyVision = () => {
  return (
    <div className="flex flex-col w-full bg-black h-screen min-h-[640px] pad:min-h-[768px] desktop:min-h-[1080px] text-center text-main-white">
      <h3 className="font-semibold font-spline tracking-[.01em] pt-[clamp(60px,16.667vw,105px)] pad:pt-[clamp(105px,9.722vw,160px)] desktop:pt-[clamp(129px,6.719vw,100vw)] tracking-[.01em] text-[clamp(24px,6.667vw,42px)] pad:text-[clamp(38px,3.519vw,66px)] desktop:text-[clamp(60px,3.125vw,100vw)] leading-[130%] pad:leading-[155%] desktop:leading-[143%]">
        Focus on your product,
        <br />
        and let us handle the rest.
      </h3>
      <div className="flex flex-col pad:flex-row justify-center items-center gap-y-[clamp(24px,6.667vw,100vw)] pad:gap-y-[0px] pad:gap-x-[clamp(75px,6.944vw,100vw)] desktop:gap-x-[clamp(64px,3.333vw,100vw)] text-[clamp(13px,3.611vw,16px)] pad:text-[clamp(14px,1.296vw,28px)] desktop:text-[clamp(24px,1.25vw,100vw)] leading-[140%] pad:leading-[170%] desktop:leading-[166%] desktop:pb-[clamp(80px,4.167vw,100px)] pad:pt-[clamp(60px,5.556vw,140px)] desktop:pt-[clamp(100px,5.208vw,100vw)]">
        <div className="flex pad:flex-col pad:justify-center items-center pad:items-start w-[clamp(265px,73.611vw,450px)] pad:w-[clamp(223px,20.648vw,396px)] desktop:w-[clamp(396px,20.625vw,100vw)]">
          <div className="flex justify-center items-center aspect-square mx-auto pr-[clamp(0px,9.722vw,35px)] pad:pr-[0px] w-[clamp(125px,34.722vw,203px)] pad:w-[clamp(223px,20.648vw,396px)] desktop:w-[clamp(308px,16.042vw,100vw)]">
            <img
              className="w-[clamp(79px,21.944vw,151px)] pad:w-[clamp(129.51px,11.992vw,230px)] desktop:w-[clamp(189px,9.844vw,100vw)]"
              src={techsvg1}
              alt="기술1"
            />
          </div>
          <h4 className="mx-auto pad:mt-[clamp(35px,0.1vw,47px)] desktop:mt-[clamp(47px,2.448vw,100vw)] w-[clamp(126px,35vw,170px)] pad:w-[clamp(218.06px,20.191vw,396px)] desktop:w-[clamp(396px,20.625vw,100vw)] pad:h-[clamp(59.66px,5.524vw,100vw)] desktop:h-auto">
            One API works with any OS, device, and browser.
          </h4>
        </div>
        <div className="flex flex-row-reverse pad:flex-col items-center pad:justify-center pad:items-start w-[clamp(265px,73.611vw,450px)] pad:w-[clamp(223px,20.648vw,396px)] desktop:w-[clamp(396px,20.625vw,100vw)]">
          <div className="flex justify-center items-center aspect-square mx-auto w-[clamp(125px,34.722vw,203px)] pad:w-[clamp(223px,20.648vw,396px)] desktop:w-[clamp(308px,16.042vw,100vw)]">
            <img
              className="w-[clamp(125px,34.722vw,203px)] pad:w-[clamp(203px,18.796vw,308px)] pad:scale-[clamp(1,10%,1.5)] desktop:scale-[1] desktop:w-[clamp(270px,14.063vw,100vw)]"
              src={techsvg2}
              alt="기술2"
            />
          </div>
          <h4 className="mx-auto pad:mt-[clamp(35px,0.1vw,47px)] desktop:mt-[clamp(47px,2.448vw,100vw)] pr-[clamp(0px,3.8vw,35px)] pad:pr-[0px] w-[clamp(115px,31.944vw,170px)] pad:w-[clamp(172.8px,16vw,252px)] desktop:w-[clamp(252px,13.125vw,100vw)] pad:h-[clamp(59.66px,5.524vw,100vw)] desktop:h-auto">
            Simple and easy integration.
          </h4>
        </div>
        <div className="flex pad:flex-col items-center pad:items-start pad:justify-center w-[clamp(265px,73.611vw,450px)] pad:w-[clamp(223px,20.648vw,396px)] desktop:w-[clamp(396px,20.625vw,100vw)]">
          <div className="flex justify-center items-center aspect-square mx-auto pr-[clamp(35px,9.722vw,60px)] pad:pr-[0px] w-[clamp(125px,34.722vw,203px)] pad:w-[clamp(223px,20.648vw,396px)] desktop:w-[clamp(308px,16.042vw,100vw)]">
            <img
              className="w-[clamp(76px,21.111vw,128px)] pad:w-[clamp(121.26px,11.228vw,194px)] desktop:w-[clamp(177px,9.219vw,100vw)]"
              src={techsvg3}
              alt="기술3"
            />
          </div>
          <h4 className="mx-auto pad:mt-[clamp(35px,0.1vw,47px)] desktop:mt-[clamp(47px,2.448vw,100vw)] w-[clamp(102px,28.34vw,120px)] pad:w-[clamp(175.54px,16.254vw,256px)] desktop:w-[clamp(256px,13.333vw,100vw)] pad:h-[clamp(59.66px,5.524vw,100vw)] desktop:h-auto">
            Low maintenance cost.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TechnologyVision;
