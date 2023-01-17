import React from "react";
import SNSIcon from "@/components/Common/SNSIcon/SNSIcon";

import { SNS_LIST } from "./Footer.constants";
import { SNSListType } from "./Footer.types";

const Footer = () => {
  return (
    <footer className="relative translate-y-[0%] w-full bg-main-black flex h-[clamp(311px,86.389vw,375px)] pad:h-[clamp(185px,17.130vw,275px)] desktop:h-[clamp(330px,17.188vw,100vw)] justify-center items-center px-[clamp(36px,10vw,76px)] pad:px-[clamp(76px,7.037vw,500px)] desktop:px-[clamp(288px,15vw,350px)] z-[90]">
      <div className="flex text-main-white w-full h-full flex-col-reverse pad:flex-row justify-around pad:justify-between items-start pad:items-center">
        <div className="pad:leading-[200%] text-[clamp(12px,3.333vw,16px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(20px,1.042vw,32px)]">
          <h3 className="h-[clamp(25px,6.944vw,40px)] pad:h-[clamp(34px,3.148vw,43px)] desktop:h-[clamp(48px,2.5vw,60px)]">
            Contact us at:
          </h3>
          <a
            href="mailto:hello@goodganglabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight underline underline-offset-8 text-[clamp(16px,4.444vw,20px)] pad:text-[clamp(20px,1.852vw,30px)] desktop:text-[clamp(26px,1.354vw,100vw)] leading-[146%]"
          >
            hello@goodganglabs.com
          </a>
          <div className="text-[clamp(8px,2.222vw,10px)] pad:text-[clamp(10px,0.926vw,15px)] desktop:text-[clamp(16px,0.7vw,100vw)] pt-[clamp(45px,12.5vw,52px)] pad:pt-[clamp(16px,1.481vw,48px)] desktop:pt-[clamp(52px,2.708vw,100vw)]">
            © 2022 Good Gang Labs Pte. Ltd. All rights reserved.
          </div>
        </div>
        <div>
          <div className="text-[clamp(12px,3.333vw,16px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(20px,1.042vw,100vw)] leading-[150%] pad:leading-[170%]">
            Follow our social media for
            <br />
            the latest news and updates.
          </div>
          <div className="flex pt-[clamp(22px,6.111vw,27px)] pad:pt-[clamp(25px,2.315vw,100vw)] desktop:pt-[clamp(25px,1.302vw,100vw)] gap-x-[clamp(22px,6.111vw,27px)] pad:gap-x-[clamp(33px,3.056vw,48px)] desktop:gap-x-[clamp(60px,3.125vw,100vw)] desktop:pl-[clamp(4px,0.208vw,10px)]">
            {SNS_LIST.map((item: SNSListType, index: number): JSX.Element => {
              return (
                <div
                  className="w-[clamp(19.5px,5.417vw,26px)] pad:w-[clamp(19.5px,1.806vw,30px)] desktop:w-[clamp(33.3px,1.734vw,100vw)]"
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
