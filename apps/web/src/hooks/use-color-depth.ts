import { useEffect, useState } from "react";

export const useColorDepth = () => {
  const [colorDepth, setColorDepth] = useState<number>(window.screen.colorDepth);

  const handleResize = () => {
    setColorDepth(() => window.screen.colorDepth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return colorDepth;
};
