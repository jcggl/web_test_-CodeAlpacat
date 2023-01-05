import React from 'react'
import Video from "@/components/Technology/Video/Video";
import example from "@/assets/videos/example.mp4";

const DemoVideo = () => {
  return (
    <div className="mobile:hidden desktop:block w-full h-screen min-h-[1080px] mx-auto w-[clamp(1680px,87.5vw,100vw)] my-[clamp(111px,5.781vw,100vw)]">
      <Video src={example} />
    </div>
  );
}

export default DemoVideo