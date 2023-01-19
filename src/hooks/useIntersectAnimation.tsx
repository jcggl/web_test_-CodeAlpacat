import { useRef, useCallback, useEffect, useState } from "react";

const useIntersectAnimation = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        if (isAnimated) return

        for (let i = 0; i < 4; i++) {
          ref.current.children[i].style.transitionProperty = "all";
          ref.current.children[i].style.transitionDuration =
            // i % 2 ? `${duration}s` : `${duration * 1.5}s`;
            `${duration}s`;
          ref.current.children[i].style.transitionTimingFunction =
            "cubic-bezier(0, 0, 0.58, 1)";
          ref.current.children[i].style.transitionDelay = `${delay}s`;
          ref.current.children[i].style.top = i % 2 ? "-15%" : "-5%";
        }

        ref.current.children[4].style.transitionProperty = "all";
        ref.current.children[4].style.transitionDuration = `${duration}s`;
        ref.current.children[4].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[4].style.transitionDelay = `${delay}s`;
        ref.current.children[4].style.transform = "translate3d(0,-5vh,0)";

        setTimeout(() => {
          ref.current.children[0].style.top = "0%";
          ref.current.children[1].style.top = "0%";
          ref.current.children[2].style.top = "0%";
          ref.current.children[3].style.top = "0%";
          ref.current.children[4].style.transform = "translate3d(0,0,0)";
        }, 700);
        setIsAnimated(true)
      }
    },
    [delay, duration, isAnimated]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    FirstStyle: {
      top: "139%",
    },
    SecondStyle: {
      top: "112.4%",
    },
    ThirdStyle: {
      top: "103.8%",
    },
    FourthStyle: {
      top: "60%",
    },
    textStyle: {
      transform: "translate3d(0,100vh,0)",
    },
  };
};

export default useIntersectAnimation;
