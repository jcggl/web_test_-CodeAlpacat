import { Footer } from "@/components/Common";
import {
  JoinUs,
  MainIntro,
  OurPartners,
  SubIntro,
  WebThreeIntro,
} from "@/components/Home";
import { TouchScrollProvider } from "@/contexts/TouchScrollContext";
import useResetScroll from "@/hooks/useResetScroll";
import useScrollPagination from "@/hooks/useScrollPagination";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { ref: scrollRef, style } = useScrollPagination();
  useResetScroll();
  return (
    <TouchScrollProvider>
      <div
        ref={scrollRef}
        className={`bg-[#1A1A1A] overflow-hidden touch-none`}
        style={style}
      >
          <MainIntro />
          <SubIntro />
          <WebThreeIntro />
          <OurPartners />
          <JoinUs />
          <Footer />
      </div>
    </TouchScrollProvider>
  );
};

export default Home;
