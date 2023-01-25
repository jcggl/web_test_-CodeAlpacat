import { useCallback, useRef, useEffect } from "react";

const usePartnerAnimation = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        ref.current.style.transitionProperty = "all";
        ref.current.style.transitionDuration = `${duration}s`;
        ref.current.style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.style.transitionDelay = `${delay}s`;

        ref.current.style.transform = "translate3d(0,0,0)";
      } else {
        ref.current.style.transform = "translate3d(0,-15%,0)";
      }
    },
    [duration, delay]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.3,
        rootMargin: "100000px 0px 0px 0px",
      });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    style: {
      transform: "translate3d(0,-15%,0)",
    },
  };
};

export default usePartnerAnimation;
