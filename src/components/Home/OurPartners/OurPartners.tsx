import React from "react";
import { partnersImageList } from "@/constants/Images/partners-image-list";
import usePartnerAnimation from "@/hooks/usePartnerAnimation";
import AutoSlider from "@/components/Home/AutoSlider/AutoSlider";

const OurPartners = () => {
  const { ref, style } = usePartnerAnimation(0.7);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center w-full overflow-hidden"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <h3
        style={style}
        className="font-spline tracking-[.01em] text-main-white text-[clamp(16px,4.444vw,26px)] pad:text-[clamp(26px,2.407vw,40px)] desktop:text-[clamp(40px,2.083vw,48px)] leading-[118%] ml-[clamp(30px,8.333vw,150px)] pad:ml-[clamp(159px,14.722vw,258px)] desktop:ml-[clamp(258px,13.438vw,100vw)] pb-[clamp(98px,27.222vw,118px)] pad:pb-[clamp(94.23px,8.725vw,112px)] desktop:pb-[clamp(140px,7.292vw,168px)]"
      >
        Our Partners
      </h3>
      <AutoSlider intersectionStyle={style} imageList={partnersImageList} />
    </div>
  );
};

export default OurPartners;
