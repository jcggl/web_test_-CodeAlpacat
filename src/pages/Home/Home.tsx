import { Footer } from "@/components/Common";
import {
  JoinUs,
  MainIntro,
  Partners,
  SubIntro,
  WebThreeIntro,
} from "@/components/Home";
import { TouchScrollProvider } from "@/contexts/TouchScrollContext";
import styles from "./Home.module.css"
import useResetScroll from "@/hooks/useResetScroll";
import useScrollPagination from "@/hooks/useScrollPagination";

const Home = () => {
  const { ref: scrollRef } = useScrollPagination();
  useResetScroll();
  return (
    <TouchScrollProvider>
      <div
        ref={scrollRef}
        className={`bg-[#1A1A1A] overflow-y-scroll ${styles.smoothScroll}`}
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <MainIntro />
        <SubIntro />
        <WebThreeIntro />
        <Partners />
        <JoinUs />
        <Footer />
      </div>
    </TouchScrollProvider>
  );
};

export default Home;
