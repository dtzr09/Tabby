import { useEffect, useState } from "react";
import { Breakpoint, useTheme } from "@mui/material";

export const useMobile = (breakpoint: Breakpoint = "sm") => {
  const [device, setDevice] = useState<boolean | null>(null); // initially null
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobile = width < theme.breakpoints.values[breakpoint];
      setDevice(isMobile);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, theme.breakpoints.values]);

  return { device };
};
