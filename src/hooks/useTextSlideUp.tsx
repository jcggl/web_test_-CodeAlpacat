import React, { useRef, useCallback, useEffect } from "react";

const useTextSlideUp = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        for (let i = 1; i < 3; i++) {
          ref.current.children[i].style.transitionProperty = "all";
          ref.current.children[i].style.transitionDuration = `${duration}s`;
          ref.current.children[i].style.transitionTimingFunction =
            "cubic-bezier(0, 0, 0.58, 1)";
          ref.current.children[i].style.transitionDelay = `${delay}s`;
          ref.current.children[i].style.transform = "translate3d(0, -2vh, 0)";
        }
        setTimeout(() => {
          ref.current.children[1].style.transform = "translate3d(0, 0, 0)";
          ref.current.children[2].style.transform = "translate3d(0, 0, 0)";
        }, 650);
      } else {
        ref.current.children[1].style.transform = "translate3d(0, 36vh, 0)";
        ref.current.children[2].style.transform = "translate3d(0, 36vh, 0)";
      }
    },
    [duration, delay]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0 });
      observer.observe(ref.current.children[0]);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    style: {
      transform: "translate3d(0, 36vh, 0)",
    },
  };
};

export default useTextSlideUp;
