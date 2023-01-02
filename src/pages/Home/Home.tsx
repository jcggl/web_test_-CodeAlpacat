import { JoinUs, MainIntro, Partners, SubIntro, WebThreeIntro } from "@/components/Home";
import useScrollPagination from "@/hooks/useScrollPagination";
import React from "react";

const Home = () => {
  const { ref: scrollRef } = useScrollPagination();
  return (
    <section ref={scrollRef} className="bg-[#1A1A1A]">
      <MainIntro />
      <SubIntro/>
      <WebThreeIntro/>
      <Partners/>
      <JoinUs/>
    </section>
  );
};

export default Home;
