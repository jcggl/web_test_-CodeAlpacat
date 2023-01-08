import React from "react";
import SNSIcon from "@/components/Common/SNSIcon/SNSIcon";

import { SNS_LIST } from "./Footer.constants";
import { SNSListType } from "./Footer.types";

const Footer = () => {
  return (
    <footer className="relative translate-y-[0%] w-full bg-main-black flex h-[clamp(311px,86.389vw,400px)] pad:h-[clamp(185px,17.130vw,330px)] desktop:h-[clamp(330px,17.188vw,100vw)] justify-center items-center px-[clamp(36px,10vw,76px)] pad:px-[clamp(76px,7.037vw,288px)] desktop:px-[clamp(288px,15vw,350px)] z-[90]">
      <div className="flex text-main-white w-full h-full flex-col-reverse pad:flex-row justify-around pad:justify-between items-start pad:items-center">
        <div className="pad:leading-10 text-[clamp(12px,3.333vw,14px)] pad:text-[clamp(14px,1.296vw,20px)] desktop:text-[clamp(20px,1.042vw,32px)]">
          Contact us at:
          <br />
          <a
            href="mailto:hello@goodganglabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight underline underline-offset-8 text-[clamp(16px,4.444vw,1.625rem)] pad:text-[clamp(20px,1.852vw,26px)] desktop:text-[clamp(26px,1.354vw,100vw)]"
          >
            hello@goodganglabs.com
          </a>
          <div className="text-[clamp(8px,2.222vw,16px)] pad:text-[clamp(12px,1.111vw,20px)] desktop:text-[clamp(16px,0.7vw,100vw)] pt-[clamp(30px,8.333vw,60px)] pad:pt-0 desktop:pt-[clamp(52px,2.708vw,100vw)]">
            © 2022 Good Gang Labs Pte. Ltd. All rights reserved.
          </div>
        </div>
        <div>
          <div className="text-[clamp(12px,3.333vw,20px)] pad:text-[clamp(14px,1.296vw,24px)] desktop:text-[clamp(20px,1.042vw,100vw)]">
            Follow our social media for
            <br />
            the latest news and updates.
          </div>
          <div className="flex pt-[clamp(25px,6.944vw,32px)] pad:pt-[clamp(25px,2.315vw,100vw)] desktop:pt-[clamp(25px,1.302vw,100vw)] gap-x-[clamp(22px,6.111vw,33px)] pad:gap-x-[clamp(33px,3.056vw,57px)] desktop:gap-x-[clamp(57px,2.969vw,100vw)]">
            {SNS_LIST.map((item: SNSListType, index: number): JSX.Element => {
              return (
                <div
                  className="w-[clamp(21.5px,5.972vw,35px)] pad:w-[clamp(21.5px,1.991vw,35px)] desktop:w-[clamp(35px,1.823vw,100vw)]"
                  key={`SNSIconFooter${index}`}
                >
                  <SNSIcon {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
