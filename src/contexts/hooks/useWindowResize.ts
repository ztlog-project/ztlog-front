import { useState, useEffect } from "react";
import { useEventListener } from "./useEventListener";

export const useWindowResize = () => {
  const [widthHeight, setWitdhHeight] = useState<number[]>([0, 0]);

  useEffect(() => {
    setWitdhHeight((notUsed) => [window.innerWidth, window.innerHeight]);
  }, []);

  useEventListener(window, "resize", () => {
    setWitdhHeight((notUsed) => [window.innerWidth, window.innerHeight]);
  });

  return widthHeight;
};
