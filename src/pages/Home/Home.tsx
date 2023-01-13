import {
  JoinUs,
  MainIntro,
  Partners,
  SubIntro,
  WebThreeIntro,
} from "@/components/Home";
import { TouchScrollProvider } from "@/contexts/TouchScrollContext";
import useResetScroll from "@/hooks/useResetScroll";
import useScrollPagination from "@/hooks/useScrollPagination";

const Home = () => {
  const { ref: scrollRef } = useScrollPagination();
  useResetScroll()
  return (
    <TouchScrollProvider>
      <section ref={scrollRef} className="bg-[#1A1A1A]">
        <MainIntro />
        <SubIntro />
        <WebThreeIntro />
        <Partners />
        <JoinUs />
      </section>
    </TouchScrollProvider>
  );
};

export default Home;
