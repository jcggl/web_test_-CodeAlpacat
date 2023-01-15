import { useCallback, useEffect } from "react";
import { useRef } from "react";

const useScrollAnimation = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        ref.current.children[1].children[0].style.transitionProperty = "all";
        ref.current.children[0].children[0].style.transitionProperty = "all";
        ref.current.children[0].children[1].children[0].style.transitionProperty =
          "all";
        ref.current.children[1].children[0].style.transitionDuration = `${duration}s`;
        ref.current.children[0].children[0].style.transitionDuration = `${duration}s`;
        ref.current.children[0].children[1].children[0].style.transitionDuration = `${duration}s`;
        ref.current.children[1].children[0].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[0].children[0].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[0].children[1].children[0].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[1].children[0].style.transitionDelay = `${delay}s`;
        ref.current.children[0].children[0].style.transitionDelay = `${delay}s`;
        ref.current.children[0].children[1].children[0].style.transitionDelay = `${delay}s`;

        ref.current.children[1].children[0].style.transform =
          "translate3d(0, -3vh, 0)";
        ref.current.children[0].children[0].style.transform =
          "translate3d(0, -3vh, 0)";
        ref.current.children[0].children[1].children[0].style.transform =
          "translate3d(20%, 0, 0)";

        setTimeout(() => {
          ref.current.children[1].children[0].style.transform =
            "translate3d(0, 0, 0)";
          ref.current.children[0].children[0].style.transform =
            "translate3d(0, 0, 0)";
          ref.current.children[0].children[1].children[0].style.transform =
            "translate3d(0, 0, 0)";
        }, 650);
      } else {
        ref.current.children[1].children[0].style.transform =
          "translate3d(0, 35vh, 0)";
        ref.current.children[0].children[0].style.transform =
          "translate3d(0, 35vh, 0)";
        ref.current.children[0].children[1].children[0].style.transform =
          "translate3d(-300%, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, {
        rootMargin: "0px 0px -50px 0px",
      });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    textStyle: {
      transform: "translate3d(0, 35vh, 0)",
    },
    imageStyle: {
      transform: "translate3d(-300%, 0, 0)",
    },
  };
};

export default useScrollAnimation;
