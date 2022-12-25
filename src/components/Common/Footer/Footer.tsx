import React from "react";
import SNSIcon from "../SNSIcon/SNSIcon";
import { SNS_LIST } from './Footer.constants';
import { SNSListType } from "./Footer.types";

const Footer = () => {
  return (
    <footer className="flex justify-between w-full h-330pxr bottom-0 left-0 px-289pxr py-73pxr text-main-white bg-main-black">
      <div className="leading-10">
        Contact us at:
        <br />
        <a
          href="mailto:hello@goodganglabs.com"
          className="text-26pxr font-extralight underline underline-offset-4"
        >
          hello@goodganglabs.com
        </a>
        <div className="pt-52pxr text-16pxr leading-10">
          © 2022 Good Gang Labs Pte. Ltd. All rights reserved.
        </div>
      </div>
      <div className="leading-8">
        Follow our social media for
        <br />
        the latest news and updates.
        <div className="flex pl-2 gap-x-[3.675rem] pt-25pxr">
          {SNS_LIST.map((item: SNSListType, index: number): JSX.Element => {
            return <SNSIcon {...item} key={`SNSIconFooter${index}`} />;
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
