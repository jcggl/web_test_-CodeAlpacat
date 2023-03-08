import useResize from '@/hooks/useResize';
import React from 'react'

const PartnersDescription = () => {
  const {width} = useResize();

  return (
    <h4 className="flex justify-center items-center mx-auto text-center text-black mt-[clamp(60px,16.667vw,90px)] pad:mt-[clamp(24px,2.222vw,35px)] desktop:mt-[clamp(35px,1.823vw,100vw)] text-[clamp(12px,3.333vw,18px)] pad:text-[clamp(18px,1.667vw,26px)] desktop:text-[clamp(20px,1.042vw,24px)] leading-[150%] pad:leading-[155%] desktop:leading-[160%]">
      Our investors trust in our value and vision.
      {width < 1080 ? <br /> : <span>&nbsp;</span>}They believe in our work.
    </h4>
  );
}

export default PartnersDescription