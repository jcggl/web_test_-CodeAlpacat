import React from "react";
import DemoVideoScreen from "./Screens/DemoVideoScreen";
import IntroScreen from './Screens/IntroScreen';
import TechVisionScreen from './Screens/TechVisionScreen';

const Technology = () => {
  return (
    <section>
      <IntroScreen/>
      <DemoVideoScreen/>
      <TechVisionScreen/>
    </section>
  );
};

export default Technology;
