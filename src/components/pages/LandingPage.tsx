import { Box } from "@mui/material";
import React from "react";
import AppNavBar from "../core/AppNavBar";
import Hero from "../hero/Hero";
import Features from "../features/Features";
import useMeasure from "react-use-measure";

const LandingPage = () => {
  const [ref, bounds] = useMeasure();
  const navbarHeight = bounds.height;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppNavBar refs={ref} />
      <Hero navbarHeight={navbarHeight} />
      <Features navbarHeight={navbarHeight} />
    </Box>
  );
};

export default LandingPage;
