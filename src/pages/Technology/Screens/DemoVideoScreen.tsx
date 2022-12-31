import React from 'react'
import Video from "@/components/Technology/Video/Video";
import example from "@/assets/videos/example.mp4";

const DemoVideoScreen = () => {
  return (
    <div className="mobile:hidden desktop:block w-full h-screen min-h-[1080px] px-120pxr py-111pxr">
      <Video src={example} />
    </div>
  );
}

export default DemoVideoScreen