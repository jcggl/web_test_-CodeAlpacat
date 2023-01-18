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
          ref.current.children[i].style.transform =
            i % 2 ? "translate3d(0,2%,0)" : "translate3d(0,-25%,0)";
        }

        ref.current.children[4].style.transitionProperty = "all";
        ref.current.children[4].style.transitionDuration = `${duration}s`;
        ref.current.children[4].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[4].style.transitionDelay = `${delay}s`;
        ref.current.children[4].style.transform = "translate3d(0,-5%,0)";

        setTimeout(() => {
          ref.current.children[0].style.transform = "translate3d(0,-16.666%,0)";
          ref.current.children[1].style.transform = "translate3d(0,0,0)";
          ref.current.children[2].style.transform = "translate3d(0,-16.666%,0)";
          ref.current.children[3].style.transform = "translate3d(0,0,0)";
          ref.current.children[4].style.transform = "translate3d(0,0,0)";
        }, 650);
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
      transform: "translate3d(0,10%,0)",
    },
    oddStyle: {
      transform: "translate3d(0,20%,0)",
    },
    textStyle: {
      transform: "translate3d(0,30vh,0)",
    },
  };
};

export default useIntersectAnimation;
