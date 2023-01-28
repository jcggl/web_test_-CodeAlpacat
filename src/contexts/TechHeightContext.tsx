import { createContext, useState, useCallback } from "react";

interface Props {
  children: JSX.Element;
}

interface TechHeightType {
  techHeight: number;
  techHeightHandler(height:number): void;
}

const TechHeightContext = createContext<TechHeightType>({
  techHeight: 0,
  techHeightHandler: (height:number) => {},
});

export const TechHeightProvider = ({ children }: Props) => {
  const [techHeight, setTechHeight] = useState<number>(0);

  const techHeightHandler = useCallback((height:number): void => {
    setTechHeight((prev) => height)
  }, []);

  const context = {
  techHeight,
  techHeightHandler
};

  return (
    <TechHeightContext.Provider value={context}>
      {children}
    </TechHeightContext.Provider>
  );
};

export default TechHeightContext;