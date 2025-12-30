import { useCallback, useEffect, useState } from "react";

export const useDevicePixelRatio = (): number => {
  const [devicePixelRatio, setDevicePixelRatio] = useState<number>(window.devicePixelRatio);

  const handleChange = useCallback(() => {
    setDevicePixelRatio(() => window.devicePixelRatio);
  }, []);

  const mqString = `(resolution: ${devicePixelRatio}dppx)`;
  const media = matchMedia(mqString);

  useEffect(() => {
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, [handleChange, media.addEventListener, media.removeEventListener]);

  return devicePixelRatio;
};
