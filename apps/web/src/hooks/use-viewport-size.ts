import { useEffect, useState } from "react";

interface ViewportSize {
  inlineSize: number;
  blockSize: number;
}

export const useViewportSize = (): ViewportSize => {
  const [viewportInlineSize, setViewportInlineSize] = useState<number>(window.innerWidth);
  const [viewportBlockSize, setViewportBlockSize] = useState<number>(window.innerHeight);

  const handleResize = () => {
    setViewportInlineSize(() => window.innerWidth);
    setViewportBlockSize(() => window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    inlineSize: viewportInlineSize,
    blockSize: viewportBlockSize,
  };
};
