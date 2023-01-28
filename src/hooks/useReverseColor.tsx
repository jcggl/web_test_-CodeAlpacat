import { useState, useEffect, useCallback } from "react";
import { useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import TechHeightContext from "@/contexts/TechHeightContext";

const useReverseColor = () => {
  const location = useLocation();
  const ref = useRef<any>();
  const { techHeight } = useContext(TechHeightContext);
  const [throttle, setThrottle] = useState<boolean>(false);
  const [isTechVision, setIsTechVision] = useState<boolean>(false);
  
  const wheelHandler = useCallback(() => {
    if (throttle) return;
    if (!ref.current) return;
    if (
      window.scrollY >= techHeight - ref.current.clientHeight &&
      window.scrollY < techHeight * 2 + ref.current.clientHeight &&
      location.pathname === "/Technology"
    ) {
      setIsTechVision(true);
    } else setIsTechVision(false);

    setThrottle(true);
    setTimeout(() => {
      setThrottle(false);
    }, 50);
  }, [throttle, location, techHeight]);

  useEffect(() => {
    window.addEventListener("scroll", wheelHandler);
    return () => {
      window.removeEventListener("scroll", wheelHandler);
    };
  }, [wheelHandler]);

  return { ref, isTechVision };
};

export default useReverseColor;
