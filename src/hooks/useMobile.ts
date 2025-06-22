import { Breakpoint, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useSessionStorage, useWindowSize } from "usehooks-ts";

export const useMobile = (breakpoint: Breakpoint = `sm`) => {
  const [isDevice, setIsDevice] = useSessionStorage<boolean>(
    `${breakpoint}:mobile`,
    false
  );

  const { width } = useWindowSize({
    initializeWithValue: false,
  });

  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (width === undefined) {
        setIsDevice(false);
        return;
      }
      setIsDevice(width < theme.breakpoints.values[breakpoint]);
    };
    handleResize();
  }, [breakpoint, setIsDevice, theme.breakpoints.values, width]);

  return { device: isDevice, width };
};
