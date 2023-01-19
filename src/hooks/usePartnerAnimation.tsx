import { useCallback, useRef, useEffect, useState } from "react";

const usePartnerAnimation = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        if (isAnimated) return
        ref.current.style.transitionProperty = "all";
        ref.current.style.transitionDuration = `${duration}s`;
        ref.current.style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.style.transitionDelay = `${delay}s`;

        ref.current.style.transform = "translate3d(0,0,0)";
        setIsAnimated(true)
      }
    },
    [duration, delay, isAnimated]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.45 });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    style: {
      transform: "translate3d(0,-10%,0)",
    },
  };
};

export default usePartnerAnimation;
