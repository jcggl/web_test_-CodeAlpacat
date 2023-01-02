import React, { useCallback, useEffect } from "react";
import { useRef } from "react";

const useScrollAnimation = (direction:string = "up", duration:number = 1, delay:number = 0) => {
  const ref = useRef<any>();

  const handleDirection = useCallback((name: string) => {
    switch (name) {
      case "up":
        return "translate3d(0, 20vh, 0)";
      case "down":
        return "translate3d(0, -20vh, 0)";
      case "left":
        return "translate3d(100%, 0, 0)";
      case "right":
        return "translate3d(-200%,10vh,500px)";
      default:
        return;
    }
  }, []);

  const handleTransition = useCallback((name: string) => {
    switch (name) {
      case "up":
        return "translate3d(0, 4vh, 0)";
      case "down":
        return "translate3d(0, -2vh, 0)";
      case "left":
        return "translate3d(10%, 0, 0)";
      case "right":
        return "translate3d(-20%,0,0)";
      default:
        return;
    }
  }, []);

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        ref.current.style.transitionProperty = "all";
        ref.current.style.transitionDuration = `${duration}s`;
        ref.current.style.transitionTimingFunction =
          "cubic-bezier(0.5, 1, 1, 1)";
        ref.current.style.transitionDelay = `${delay}s`;
        ref.current.style.opacity = 1;
        ref.current.style.transform = "translate3d(0, 0, 0)";
        setTimeout(() => {
          ref.current.style.transform = handleTransition(direction);
        }, 500);
      } else {
        if (ref.current.children[0].classList[0] === "restart-animation") {
        }
        ref.current.style.transform = handleDirection(direction);
      }
    },
    [delay, duration, handleDirection, handleTransition, direction]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0,
        rootMargin: "0px 0px -50px 0px",
      });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    style: {
      transform: handleDirection(direction),
    },
  };
};

export default useScrollAnimation;
