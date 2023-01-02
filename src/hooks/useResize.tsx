import React from "react";
import { useState, useCallback } from "react";
import { useEffect } from "react";

const useResize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [throttle, setThrottle] = useState<boolean>(false);

  const resizeHandler = useCallback((e: any) => {
    if (throttle) return;
    if (!throttle) {
      setWidth(parseInt(e.target.innerWidth));
      setHeight(parseInt(e.target.innerHeight));
    }

    setThrottle(true);

    setTimeout(() => {
      setThrottle(false);
    }, 50);
  }, [throttle]);


  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    }
  }, [resizeHandler]);

  return {
    width,
    height
  };
};

export default useResize;
