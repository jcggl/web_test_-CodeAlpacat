import React from "react";
// import SNSIcon from "../SNSIcon/SNSIcon";
import { SNSIcon } from "@/components/Common";
import { SNS_LIST } from "./Footer.constants";
import { SNSListType } from "./Footer.types";

const Footer = () => {
  return (
    <footer className="relative translate-y-[0%] w-full bg-main-black mobile:flex mobile:h-311pxr pad:h-185pxr desktop:h-330pxr mobile:justify-center mobile:items-center mobile:px-[2.25rem] pad:px-[6.75rem] desktop:px-[18rem] z-[90]">
      <div className="flex text-main-white w-full h-full mobile:flex-col-reverse pad:flex-row mobile:justify-around pad:justify-between mobile:items-start pad:items-center">
        <div className="pad:leading-10 text-[clamp(0.75rem,1.3vw,1.25rem)]">
          Contact us at:
          <br />
          <a
            href="mailto:hello@goodganglabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight underline underline-offset-8 text-[clamp(1rem,1.3vw,1.625rem)]"
          >
            hello@goodganglabs.com
          </a>
          <div className="text-[clamp(0.5rem,0.7vw,1rem)] mobile:pt-30pxr pad:pt-0 desktop:pt-52pxr">
            © 2022 Good Gang Labs Pte. Ltd. All rights reserved.
          </div>
        </div>
        <div>
          <div className="text-[clamp(0.75rem,1.04vw,1.25rem)]">
            Follow our social media for
            <br />
            the latest news and updates.
          </div>
          <div className="flex pt-25pxr gap-x-[clamp(1.5rem,3.06vw,3.675rem)]">
            {SNS_LIST.map((item: SNSListType, index: number): JSX.Element => {
              return (
                <div
                  className="w-[clamp(1.25rem,1.8vw,2.2rem)]"
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
