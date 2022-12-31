import React from "react";
import DemoVideoScreen from "./Screens/DemoVideoScreen";
import IntroScreen from './Screens/IntroScreen';
import OurSolutionScreen from "./Screens/OurSolutionScreen";
import TechVisionScreen from './Screens/TechVisionScreen';

const Technology = () => {
  return (
    <section>
      <IntroScreen/>
      <DemoVideoScreen/>
      <TechVisionScreen/>
      <OurSolutionScreen/>
    </section>
  );
};

export default Technology;
