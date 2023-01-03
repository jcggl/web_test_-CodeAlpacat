import React from "react";
import { useState, useCallback } from "react";
import { useEffect } from "react";

const useResize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const resizeHandler = useCallback(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);

  }, []);

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
