import { useRef, useCallback, useEffect } from "react";

const useIntersectAnimation = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < 4; i++) {
          ref.current.children[i].style.transitionProperty = "all";
          ref.current.children[i].style.transitionDuration =
            i % 2 ? `${duration}s`: `${duration * 1.2}s`;
          ref.current.children[i].style.transitionTimingFunction =
            "cubic-bezier(0.5, 1, 1.6, 0.8)";
          ref.current.children[i].style.transitionDelay = `${delay}s`;
          ref.current.children[i].style.top = i % 2 ? "-10vh" : "-25vh";
        }

        ref.current.children[4].style.transitionProperty = "all";
        ref.current.children[4].style.transitionDuration = `${duration}s`;
        ref.current.children[4].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[4].style.transitionDelay = `${delay}s`;
        ref.current.children[4].style["padding-bottom"] = "13vh";

        setTimeout(() => {
          ref.current.children[0].style.top = "-20vh";
          ref.current.children[1].style.top = "0";
          ref.current.children[2].style.top = "-20vh";
          ref.current.children[3].style.top = "0";
          ref.current.children[4].style["padding-bottom"] = "0vh";
        }, 350);
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.4 });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    evenStyle: {
      top: "0",
    },
    oddStyle: {
      top: "20%"
    },
  };
};

export default useIntersectAnimation;
