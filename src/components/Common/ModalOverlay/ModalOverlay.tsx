import NavigationContext from "@/contexts/NavigationContext";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import modalBackground from "../../../assets/common/modal-background.svg";
import ModalRouter from "../ModalRouter/ModalRouter";

const ModalOverlay = () => {
  const { toggle } = useContext(NavigationContext);
  const [animate, setAnimate] = useState<boolean>(false);
  useEffect(() => {
    let timer: any;
    if (!toggle) {
      timer = setTimeout(() => setAnimate(false), 200);
    }
    setAnimate(true);
    return () => clearTimeout(timer);
  }, [toggle]);

  if (!toggle && !animate) return null;
  return (
    <div
      className={`pad:hidden fixed top-0 left-0 w-full h-screen z-[92] bg-transparent ${
        toggle
          ? "animate-[fadeIn_.25s_ease-in-out]"
          : "animate-[fadeOut_.25s_ease-in-out]"
      }`}>
      <ModalRouter/>
    </div>
  );
};

export default ModalOverlay;
