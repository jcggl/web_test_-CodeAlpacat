import React from "react";

const About = () => {
  return (
    <section className="h-auto min-h-full flex flex-col items-center w-full pt-[clamp(6.56rem,17.9vw,21.5rem)] pb-[clamp(6.26rem,13.8vw,16.56rem)]">
      <article className="text-font-black mobile:w-285pxr pad:w-748pxr desktop:w-1181pxr">
        <h3 className="font-bold whitespace-nowrap pb-[clamp(2.81rem,6.87vw,8.25rem)] text-[clamp(1.5rem,3.6vw,4.375rem)] leading-[140%]">
          About GoodGang Labs
        </h3>
        <h4 className="text-[clamp(0.75rem,1.56vw,1.875rem)] leading-[135%]">
          GoodGang Labs is a web3 metaverse startup dedicated to building the
          next-generation communication platform and technology for avatars. We
          are a tight-knit group of creative experts driven to achieve our goal
          of natural and expressive 3D avatar interactions.
          <br />
          <br />
          The seasoned founders of GoodGang Labs bring their diverse set of
          technical, managerial, and developmental expertise gained from
          companies like Meta, Naver, Line, and Snow. Our creative engineers,
          artists, and product managers from multicultural backgrounds
          established an environment where we let new ideas flourish, and
          iterate quickly and effectively to keep building upon our
          achievements.
          <br />
          <br />
          We believe that avatar communication holds the key to the future of
          the metaverse. One of the challenges in developing effective metaverse
          communication is how freely you can express yourself through avatars.
          Because much of real-life interactions are non-verbal, capturing and
          conveying subtle facial expressions, gestures, and intonations are
          more important than ever before.
          <br />
          <br />
          We are set to address this challenge by developing a core technology
          that allows us to accurately capture the non-verbal elements of
          communication, and deliver them dynamically and expressively through
          our avatars. We do this by integrating our cutting-edge AI video and
          audio technology with our masterfully crafted 3D avatars and
          presenting them in a platform that is both immersive, inviting, and
          captivating—something that traditional text, audio, and video chats
          simply cannot emulate. With our platform and avatars, you can enjoy
          these beautiful results while simultaneously minimizing your risks of
          privacy and data safety.
        </h4>
      </article>
    </section>
  );
};

export default About;
