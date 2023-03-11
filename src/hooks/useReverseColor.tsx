import { useState, useEffect, useCallback } from "react";
import { useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import TechHeightContext from "@/contexts/TechHeightContext";

const useReverseColor = () => {
  const location = useLocation();
  const ref = useRef<any>();
  const { techHeight, introHeight } = useContext(TechHeightContext);
  const [throttle, setThrottle] = useState<boolean>(false);
  const [isTechVision, setIsTechVision] = useState<boolean>(false);

  const wheelHandler = useCallback(
    (e: any) => {
      e.preventDefault();
      if (throttle) return;
      if (!ref.current) return;
      if (
        window.scrollY >= introHeight - ref.current.clientHeight / 4 &&
        window.scrollY <
          introHeight + techHeight + ref.current.clientHeight / 4 &&
        location.pathname === "/Technology"
      ) {
        setIsTechVision(true);
      } else setIsTechVision(false);

      setThrottle(true);
      setTimeout(() => {
        setThrottle(false);
      }, 50);
    },
    [throttle, location, techHeight, introHeight]
  );

  useEffect(() => {
    const curRef = ref.current
    const preventHandler = (e: any) => {
      e.preventDefault();
    };
    curRef.addEventListener("wheel",preventHandler);
    window.addEventListener("scroll", wheelHandler);
    return () => {
      window.removeEventListener("scroll", wheelHandler);
      curRef.removeEventListener("wheel", preventHandler);
    };
  }, [wheelHandler]);

  return { ref, isTechVision };
};

export default useReverseColor;
