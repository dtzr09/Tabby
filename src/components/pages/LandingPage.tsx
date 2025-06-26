import { Box, CircularProgress } from "@mui/material";
import React from "react";
import AppNavBar from "../core/AppNavBar";
import Hero from "../hero/Hero";
import Features from "../features/Features";
import useMeasure from "react-use-measure";
import Faqs from "../faqs/Faqs";
import Footer from "../footer/Footer";
import { useMobile } from "@/hooks/useMobile";

const LandingPage = () => {
  const [ref, bounds] = useMeasure();
  const navbarHeight = bounds.height;
  const { device } = useMobile();

  if (device === null) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          position: "relative",
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
          <Features />
          <Box
            sx={{
              mt: 8,
            }}
          >
            <Faqs />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default LandingPage;
