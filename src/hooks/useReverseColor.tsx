import { useState, useEffect, useCallback } from "react";
import { useRef } from "react";
import useResize from "./useResize";
import { useLocation } from "react-router-dom";

const useReverseColor = () => {
  const location = useLocation();
  const ref = useRef<any>();
  const { height: pageHeight } = useResize();
  const [throttle, setThrottle] = useState<boolean>(false);
  const [isTechVision, setIsTechVision] = useState<boolean>(false);
  const wheelHandler = useCallback(() => {
    if (throttle) return;
    if (!ref.current) return;
    if (
      window.scrollY >= pageHeight + ref.current.clientHeight / 4 &&
      window.scrollY < pageHeight * 2 + ref.current.clientHeight / 2 &&
      location.pathname === "/Technology"
    ) {
      setIsTechVision(true);
    } else setIsTechVision(false);

    setThrottle(true);
    setTimeout(() => {
      setThrottle(false);
    }, 50);
  }, [throttle, pageHeight, location]);

  useEffect(() => {
    window.addEventListener("scroll", wheelHandler);
    return () => {
      window.removeEventListener("scroll", wheelHandler);
    };
  }, [wheelHandler]);

  return { ref, isTechVision };
};

export default useReverseColor;
