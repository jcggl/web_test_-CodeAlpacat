import { useRef, useCallback, useEffect } from "react";

const useIntersectAnimation = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {

        for (let i = 0; i < 4; i++) {
          ref.current.children[i].style.transitionProperty = "all";
          ref.current.children[i].style.transitionDuration =
            // i % 2 ? `${duration}s` : `${duration * 1.5}s`;
            `${duration}s`;
          ref.current.children[i].style.transitionTimingFunction =
            "cubic-bezier(0, 0, 0.58, 1)";
          ref.current.children[i].style.transitionDelay = `${delay}s`;
          ref.current.children[i].style.top = i % 2 ? "-7vh" : "-35vh";
        }

        ref.current.children[4].style.transitionProperty = "all";
        ref.current.children[4].style.transitionDuration = `${duration}s`;
        ref.current.children[4].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[4].style.transitionDelay = `${delay}s`;
        ref.current.children[4].style.transform = "translate3d(0,-5vh,0)";

        setTimeout(() => {
          ref.current.children[0].style.top = "-20vh";
          ref.current.children[1].style.top = "0%";
          ref.current.children[2].style.top = "-20vh";
          ref.current.children[3].style.top = "0%";
          ref.current.children[4].style.transform = "translate3d(0,0,0)";
        }, 730);
      } else {
          ref.current.children[0].style.top = "139%";
          ref.current.children[1].style.top = "112.4%";
          ref.current.children[2].style.top = "103.8%";
          ref.current.children[3].style.top = "60%";
          ref.current.children[4].style.transform = "translate3d(0,100vh,0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.6,
        rootMargin: "100000px 0px 30% 0px",
      });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    FirstStyle: {
      top: "139vh",
    },
    SecondStyle: {
      top: "112.4vh",
    },
    ThirdStyle: {
      top: "103.8vh",
    },
    FourthStyle: {
      top: "60vh",
    },
    textStyle: {
      transform: "translate3d(0,100vh,0)",
    },
  };
};

export default useIntersectAnimation;
