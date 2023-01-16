import React from "react";
import { AboutDescription, AboutHeader } from "@/components/About";

const About = () => {
  return (
    <section className="flex flex-col items-center w-full text-font-black pt-[clamp(105px,29.167vw,183px)] pad:pt-[clamp(183px,16.944vw,344px)] desktop:pt-[clamp(332px,17.292vw,100vw)] pb-[clamp(100px,27.778vw,186px)] pad:pb-[clamp(186px,17.222vw,167px)] desktop:pb-[clamp(350px,18.229vw,400px)] px-[clamp(34px,9.444vw,166px)] pad:px-[clamp(166px,15.370vw,345px)] desktop:px-[clamp(440px,22.917vw,600px)]">
      <div>
        <AboutHeader />
        <AboutDescription />
      </div>
    </section>
  );
};

export default About;
