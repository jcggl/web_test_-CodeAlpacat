import React, { useState } from "react";

const HiringButton = ({
  animationStyle,
}: {
  animationStyle: { transform: string };
}) => {
  const [hoverHire, setHoverHire] = useState<string>("right-0");
  const expandDiv = () => {
    setHoverHire("right-[-3vw]");
  };
  const shortenDiv = () => {
    setHoverHire("right-0");
  };
  return (
    <div
      style={animationStyle}
      className="relative flex justify-center items-center w-[clamp(104px,28.889vw,120.8px)] pad:w-[clamp(140px,12.963vw,182px)] desktop:w-[182px] h-[clamp(30px,8.333vw,36px)] pad:h-[clamp(42px,3.889vw,54px)] desktop:h-[54px] bg-main-white rounded-[5rem] text-[clamp(12px,3.333vw,14.4px)] pad:text-[clamp(16px,1.481vw,24px)] desktop:text-[24px] cursor-pointer text-center text-black font-medium"
      onMouseOver={expandDiv}
      onMouseLeave={shortenDiv}
    >
      <a
        href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
        target="_blank"
        className="z-[2]"
        rel="noopener noreferrer"
      >
        We're hiring!
      </a>
      <a
        href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute flex items-center justify-end right-0 rounded-[5rem] w-[clamp(104px,28.889vw,120.8px)] pad:w-[clamp(140px,12.963vw,182px)] pr-[1vw] desktop:w-[182px] h-[clamp(30px,8.333vw,36px)] pad:h-[clamp(42px,3.889vw,54px)] desktop:h-[54px] transition-all ease-in-out duration-[300ms] bg-main-white ${hoverHire} z-[1]`}
      >
        {/*  pad:pr-[clamp(15px,1.389vw,22px)] desktop:pr-[clamp(22px,1.146vw,100vw)] */}
        <div
          className={`${
            hoverHire === "right-[-3vw]" ? "opacity-100" : "opacity-0"
          } transition-all ease-out duration-[200ms] font-bold`}
        >
          KO
        </div>
      </a>
    </div>
  );
};

export default HiringButton;
