import { useCallback, useEffect, useState } from "react";

export const useScreenOrientation = () => {
  const [screenOrientation, setScreenOrientation] = useState<OrientationType>(
    window.screen.orientation.type,
  );

  const handleScreenOriantation = useCallback(() => {
    setScreenOrientation(() => window.screen.orientation.type);
  }, []);

  useEffect(() => {
    window.addEventListener("change", handleScreenOriantation);

    return () => window.removeEventListener("change", handleScreenOriantation);
  }, [handleScreenOriantation]);

  return screenOrientation;
};
