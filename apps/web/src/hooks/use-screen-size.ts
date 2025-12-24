import { useEffect, useState } from "react";

interface ScreenSize {
  inlineSize: number;
  blockSize: number;
}

export const useScreenSize = (): ScreenSize => {
  const [screenInlineSize, setScreenInlineSize] = useState<number>(window.screen.width);
  const [screenBlockSize, setScreenBlockSize] = useState<number>(window.screen.height);

  const handleResize = () => {
    setScreenInlineSize(() => window.screen.width);
    setScreenBlockSize(() => window.screen.height);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    inlineSize: screenInlineSize,
    blockSize: screenBlockSize,
  };
};
