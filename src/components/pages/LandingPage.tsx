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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Hero navbarHeight={navbarHeight} />
        <Features navbarHeight={navbarHeight} />
      </Box>
    </Box>
  );
};

export default LandingPage;
