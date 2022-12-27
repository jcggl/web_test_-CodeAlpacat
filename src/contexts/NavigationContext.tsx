import { createContext, useState } from "react";

interface Props {
  children: JSX.Element;
}

interface NavigationType {
  toggle: boolean,
  toggleNavigation(): void
}

const NavigationContext = createContext<NavigationType>({
  toggle: false,
  toggleNavigation: () => {}
});

export const NavigationProvider = ({ children }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleNavigation = ():void => {
    setToggle((prev) => !prev)
  }
  
  const context = {
    toggle,
    toggleNavigation
  }
  
  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
