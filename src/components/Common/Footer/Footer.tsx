import React from "react";
// import SNSIcon from "../SNSIcon/SNSIcon";
import { SNSIcon } from "@/components/Common";
import { SNS_LIST } from "./Footer.constants";
import { SNSListType } from "./Footer.types";

const Footer = () => {
  return (
    <footer className="w-full bg-main-black mobile:px-[2.25rem] mobile:flex mobile:items-center mobile:justify-center mobile:h-311pxr pad:h-185pxr pad:px-[6.75rem] desktop:h-330pxr desktop:px-[18rem]">
      <div className="flex text-main-white mobile:flex-col-reverse mobile:justify-around mobile:items-start pad:flex-row pad:justify-between pad:items-center pad:flex-row pad:items-center w-full h-full">
        <div className="pad:leading-10 text-[clamp(0.75rem,1.3vw,1.25rem)]">
          Contact us at:
          <br />
          <a
            href="mailto:hello@goodganglabs.com"
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
                <div className="w-[clamp(1.25rem,1.8vw,2.2rem)]">
                  <SNSIcon {...item} key={`SNSIconFooter${index}`} />
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
