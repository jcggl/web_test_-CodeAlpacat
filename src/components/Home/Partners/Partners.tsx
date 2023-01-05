import React from "react";
import { partnersImageList } from "@/constants/Images/partners-image-list";
import usePartnerAnimation from "@/hooks/usePartnerAnimation";
import AutoSlider from "./../AutoSlider/AutoSlider";
const Partners = () => {
  const { ref, style } = usePartnerAnimation(0.5);

  return (
    <div
      ref={ref}
      style={style}
      className="flex flex-col justify-center w-full h-[88.981vh]"
      // min-w-[360px] pad:min-w-[1080px] desktop:min-w-[1920px] min-h-[569.4784px] pad:min-h-[683.374px] desktop:min-h-[960.9948px]
    >
      <h3 className="font-spline text-main-white text-[clamp(18px,5vw,26px)] pad:text-[clamp(26px,2.407vw,40px)] desktop:text-[clamp(40px,2.083vw,70px)] leading-[118%] ml-[clamp(23px,6.389vw,90px)] pad:ml-[clamp(91.66px,8.487vw,115px)] desktop:ml-[clamp(115px,5.99vw,160px)] pb-[clamp(50px,7.813vh,54px)] pad:pb-[clamp(54px,7.031vh,68px)] desktop:pb-[clamp(68px,6.296vh,80px)]">
        Our Partners
      </h3>
      <AutoSlider imageList={partnersImageList} />
    </div>
  );
};

export default Partners;
