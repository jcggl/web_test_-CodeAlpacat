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

const Home = () => {
  const { ref: scrollRef, style, wheelHandler, touchScrollHandler, handleTouchStart } = useScrollPagination();
  useResetScroll();
  return (
    <TouchScrollProvider>
      <div
        ref={scrollRef}
        className={`bg-[#1A1A1A] overflow-y-scroll`}
        style={style}
        onWheel={wheelHandler}
        onTouchStart={handleTouchStart}
        onTouchMove={touchScrollHandler}
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
