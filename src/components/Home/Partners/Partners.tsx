import React, { useContext } from "react";
import { partnersImageList } from "@/constants/Images/partners-image-list";
import usePartnerAnimation from "@/hooks/usePartnerAnimation";
import AutoSlider from "@/components/Home/AutoSlider/AutoSlider";
import TouchScrollContext from "@/contexts/TouchScrollContext";

const Partners = () => {
  const { ref, style } = usePartnerAnimation(0.6);
  const { touchScrollHandler, handleTouchStart } =
    useContext(TouchScrollContext);

  return (
    <div
      ref={ref}
      // style={{ ...style, height: "calc(var(--vh, 1vh) * 100)" }}
      className="flex flex-col justify-center w-full h-screen touch-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={touchScrollHandler}
    >
      <h3 className="font-spline tracking-[.01em] text-main-white text-[clamp(18px,5vw,26px)] pad:text-[clamp(26px,2.407vw,40px)] desktop:text-[clamp(40px,2.083vw,70px)] leading-[118%] ml-[clamp(23px,6.389vw,90px)] pad:ml-[clamp(159px,14.722vw,115px)] desktop:ml-[clamp(115px,5.99vw,160px)] pb-[clamp(50px,7.813vh,54px)] pad:pb-[clamp(85px,7.870vw,68px)] desktop:pb-[clamp(68px,6.296vh,80px)]">
        Our Partners
      </h3>
      <AutoSlider imageList={partnersImageList} />
    </div>
  );
};

export default Partners;
