import React, { useRef } from "react";
import kimgisaLab from "@/assets/svg/home/kimgisa-lab-grey.svg";
import naverZ from "@/assets/svg/home/naver-z.svg";
import planetarium from "@/assets/svg/home/planetarium.svg";
import d2StartUp from "@/assets/svg/home/d2-startup.svg";
import nvidia from "@/assets/svg/home/nvidia.svg";
import lineNext from "@/assets/svg/home/line-next.svg";
import dosi from "@/assets/svg/home/dosi.svg";
import JJ from "@/assets/partners/img_partners_JJ.png";
import JC from "@/assets/partners/img_partners_JC.png";
import KP from "@/assets/partners/img_partners_KP.png";
import PartnerWrapper from "../PartnerWrapper/PartnerWrapper";
import AngelPartnerWrapper from "../AngelPartnerWrapper/AngelPartnerWrapper";

const PartnersListMobile = () => {
  const partnersList = useRef<string[]>([
    "w-[clamp(115.5px,32.083vw,173.25px)] brightness-0", //naverZ
    "w-[clamp(101.75px,28.264vw,152.625px)] brightness-0", //lineNext
    "w-[clamp(108.56px,30.156vw,162.84px)] brightness-0", //d2StartUp
    "w-[clamp(101.14px,28.094vw,151.71px)] brightness-0", //dosi
    "w-[clamp(127.81px,35.503vw,191.715px)] brightness-0", //nvidia
    "w-[clamp(64.46px,17.906vw,96.69px)] brightness-0", //planetarium
    "w-[clamp(46.48px,12.911vw,69.72px)]", //kimgisaLab
  ]);
  
  const firstLayerImage = useRef<string[]>([
    naverZ,
    lineNext,
    d2StartUp,
    dosi,
    nvidia,
    planetarium,
    kimgisaLab,
    KP,
    JJ,
    JC
  ]);

  const partnersName = useRef<string[]>([
    "Konstantinos\nPapamilpitias",
    "Joohwan Jung",
    "JC Kim",
  ]);

  return (
    <div className="grid pad:hidden justify-center items-center mt-[clamp(63px,17.5vw,94.5px)] grid-cols-2 gap-x-[clamp(14px,3.889vw,21px)] gap-y-[clamp(39px,10.833vw,58.5px)] mx-[clamp(47px,13.056vw,70.5px)] mb-[clamp(103.77px,28.825vw,155.655px)]">
      {firstLayerImage.current.map((item, index) => {
        if (index < 7)
          return (
            <PartnerWrapper
              key={`mobileGridPartner${index}`}
              src={item}
              boxStyle={`"w-[clamp(125px,34.722vw,187.5px)] h-[clamp(68px,18.889vw,102px)] mx-auto ${
                index === 6 && "mt-[clamp(9px,2.5vw,13.5px)]"
              }`}
              style={partnersList.current[index]}
            />
          );
        else
          return (
            <AngelPartnerWrapper
              key={`mobileGridPartner${index}`}
              src={item}
              boxStyle={
                "w-[w-[clamp(125px,34.722vw,187.5px)]] text-[clamp(9px,2.5vw,13.5px)] leading-[130%] text-main-black font-inter"
              }
              innerStyle="w-[clamp(55px,15.278vw,82.5px)] mb-[clamp(10.89px,3.025vw,16.335px)] aspect-square"
              name={partnersName.current[index - 7]}
            />
          );
      })}
    </div>
  );
}

export default PartnersListMobile