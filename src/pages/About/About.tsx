import React from "react";
import AboutDescription from "./Screens/AboutDescription";
import AboutHeader from "./Screens/AboutHeader";

const About = () => {
  return (
    <section className="flex justify-center w-full text-font-black mobile:pt-[6.56rem] pad:pt-[11.437rem] desktop:pt-[21.5rem] mobile:pb-[6.26rem] pad:pb-[11.625rem] desktop:pb-[16.56rem] mobile:px-[2.31rem] pad:px-[10.375rem] desktop:px-[21.5625rem]">
      <AboutHeader />
      <AboutDescription />
    </section>
  );
};

export default About;
