import { Footer } from "@/components/Common";
import {
  JoinUs,
  MainIntro,
  OurPartners,
  SubIntro,
  WebThreeIntro,
} from "@/components/Home";
import { TouchScrollProvider } from "@/contexts/TouchScrollContext";
import styles from "./Home.module.css";
import useResetScroll from "@/hooks/useResetScroll";
import useScrollPagination from "@/hooks/useScrollPagination";

const Home = () => {
  const { ref: scrollRef } = useScrollPagination();
  useResetScroll();
  return (
    <TouchScrollProvider>
      <div
        ref={scrollRef}
        className={`bg-[#1A1A1A] overflow-hidden ${styles.smoothScroll}`}
        // style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
          <MainIntro />
          <SubIntro />
          <WebThreeIntro />
          <OurPartners />
          <JoinUs />
          <Footer />
        {/* <div className="w-full h-full">
        </div> */}
      </div>
    </TouchScrollProvider>
  );
};

export default Home;
