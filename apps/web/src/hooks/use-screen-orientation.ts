import { useUpdateEffect } from "@reso/ui";
import { useState } from "react";

export const useScreenOrientation = () => {
  const [screenOrientation, setScreenOrientation] = useState<OrientationType>(
    window.screen.orientation.type,
  );

  const handleScreenOriantation = () => {
    setScreenOrientation(() => window.screen.orientation.type);
  };

  useUpdateEffect(() => {
    window.addEventListener("change", handleScreenOriantation);

    return () => window.removeEventListener("change", handleScreenOriantation);
  }, []);

  return screenOrientation;
};
