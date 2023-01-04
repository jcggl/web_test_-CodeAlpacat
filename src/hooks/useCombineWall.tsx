import React, { useRef, useCallback, useEffect } from "react";

const useCombineWall = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < 4; i++) {
          ref.current.children[i].style.transitionProperty = "all";
          ref.current.children[i].style.transitionDuration = `${duration}s`;
          ref.current.children[i].style.transitionTimingFunction =
            "cubic-bezier(0, 0, 0.58, 1)";
          ref.current.children[i].style.transitionDelay = `${delay}s`;
        }

        ref.current.children[0].style.transform = "translate3d(0, -1.5vw, 0)";
        ref.current.children[1].style.transform = "translate3d(1vw, 0, 0)";
        ref.current.children[2].style.transform = "translate3d(-1vw, 0, 0)";
        ref.current.children[3].style.transform = "translate3d(1vw, 0, 0)";
        setTimeout(() => {
          ref.current.children[0].style.transform = "translate3d(0, 0, 0)";
          ref.current.children[1].style.transform = "translate3d(0, 0, 0)";
          ref.current.children[2].style.transform = "translate3d(0, 0, 0)";
          ref.current.children[3].style.transform = "translate3d(0, 0, 0)";
        }, 500);
      } else {
        ref.current.children[0].style.transform = "translate3d(0, 31vw, 0)";
        ref.current.children[1].style.transform = "translate3d(-31vw, 0, 0)";
        ref.current.children[2].style.transform = "translate3d(31vw, 0, 0)";
        ref.current.children[3].style.transform = "translate3d(-31vw, 0, 0)";
      }
    },
    [duration, delay]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0 });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    bottomStyle: {
      transform: "translate3d(0, 31vw, 0)",
    },
    leftStyle: {
      transform: "translate3d(-31vw, 0, 0)",
    },
    rightStyle: {
      transform: "translate3d(31vw, 0, 0)",
    },
    topStyle: {
      transform: "translate3d(-31vw, 0, 0)",
    },
  };
};

export default useCombineWall;
