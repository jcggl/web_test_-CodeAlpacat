import React, { useState, useRef, useEffect } from "react";

interface positionStyleType {
  marginLeft: string;
}

const useMoveSlide = (imageSize: number) => {
  const imgSize = useRef<number>(imageSize);
  const [current, setCurrent] = useState<number>(0);
  const [style, setStyle] = useState<positionStyleType>({
    marginLeft: `-${current}00%`,
  });


  const moveSlide = (index: number): void => {
    let nextIndex: number = current + index;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return { moveSlide, style, current };
};

export default useMoveSlide;
