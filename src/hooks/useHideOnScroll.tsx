import { useState, useEffect, useCallback } from "react";

const useHideOnScroll = () => {
  //스크롤 중이면 setScroll을 true
  //true일 때는 opacity를 0으로 바꿈. false일 경우 1초 setTimeout을 지정 후 false로
  const [throttle, setThrottle] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  const onScrollHandler = useCallback(() => {
    if (throttle || scroll) return;
    setScroll((prev) => true);
    setThrottle((prev) => true);
  },[throttle, scroll]);

  useEffect(() => {
    
    let scrollTimer = setTimeout(() => {
      setScroll((prev) => false);
    }, 700);
    let throttleTimer = setTimeout(() => {
      setThrottle(false);
    }, 200);

    window.addEventListener("wheel", onScrollHandler);
    return () => {
      window.removeEventListener("wheel", onScrollHandler);
      clearTimeout(scrollTimer);
      clearTimeout(throttleTimer);
    };
  }, [throttle, scroll, onScrollHandler]);

  return scroll ? { style: { opacity: 0 } } : { style: { opacity: 1 } };
};

export default useHideOnScroll;
