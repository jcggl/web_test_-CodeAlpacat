import React from 'react'


const HiringButton = ({animationStyle}:{animationStyle:{transform:string}}) => {
  return (
    <div
      style={animationStyle}
      className="flex justify-center items-center w-[clamp(130px,36.111vw,157px)] pad:w-[clamp(140px,12.963vw,248px)] desktop:w-[182px] h-[clamp(34.67px,9.631vw,46px)] pad:h-[clamp(42px,3.889vw,64px)] desktop:h-[54px] bg-main-white rounded-[5rem] text-[clamp(16px,4.444vw,20px)] pad:text-[clamp(16px,1.481vw,30px)] desktop:text-[24px]"
    >
      <a
        href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-center text-black font-medium`}
      >
        We're hiring!
      </a>
    </div>
  );
}

export default HiringButton