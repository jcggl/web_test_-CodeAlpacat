import React from 'react'


const HiringButton = ({animationStyle}:{animationStyle:{transform:string}}) => {
  return (
    <div
      style={animationStyle}
      className="flex justify-center items-center w-[clamp(130px,36.111vw,157px)] pad:w-[clamp(157px,14.537vw,248px)] desktop:w-[clamp(182px,9.479vw,100vw)] h-[clamp(34.67px,9.631vw,46px)] pad:h-[clamp(46px,4.259vw,64px)] desktop:h-[clamp(54px,2.813vw,100vw)] bg-main-white rounded-[5rem] text-[clamp(16px,4.444vw,20px)] pad:text-[clamp(20px,1.852vw,30px)] desktop:text-[clamp(24px,1.25vw,100vw)]"
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