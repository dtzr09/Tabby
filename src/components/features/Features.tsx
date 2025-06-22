import { alpha, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FeatureCarousel from "./FeaturesCarousel";
import { useMobile } from "@/hooks/useMobile";

const Features = () => {
  const theme = useTheme();
  const { device } = useMobile();
  return (
    <section id="features" style={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // padding: device ? theme.spacing(3, 4) : theme.spacing(15, 25),
          minHeight: "100vh",
          gap: theme.spacing(1),
        }}
      >
        <Box
          sx={{
            padding: device ? 0 : theme.spacing(0, 50),
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            gap: theme.spacing(1),
          }}
        >
          <Typography variant={device ? "h6" : "h5"} fontWeight={"bold"}>
            No fluff. Just features.
          </Typography>
          <Typography variant={device ? "h4" : "h3"} fontWeight={"bold"}>
            Less admin. More adventures.
          </Typography>
          <Typography
            variant={device ? "body1" : "h6"}
            color={theme.palette.text.secondary}
          >
            Tabby fits right into your daily chats - so you can track, split,
            and move on with life.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: alpha(theme.palette.background.paper, 0.15),
            padding: device ? 0 : theme.spacing(3, 50),
            mt: device ? 0 : 2,
          }}
        >
          <FeatureCarousel />
        </Box>
      </Box>
    </section>
  );
};

export default Features;
