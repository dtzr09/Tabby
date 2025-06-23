import { alpha, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useMobile } from "@/hooks/useMobile";
import FeaturesDisplay from "./FeaturesDisplay";

const Features = () => {
  const theme = useTheme();
  const { device } = useMobile();
  return (
    <section
      id="features"
      style={{ minHeight: "100vh", paddingTop: device ? theme.spacing(5) : theme.spacing(10) }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(1),
        }}
      >
        <Box
          sx={{
            padding: device ? theme.spacing(4, 2, 2, 2) : theme.spacing(0, 50),
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            gap: theme.spacing(1),
          }}
        >
          <Typography variant={device ? "body1" : "h5"} fontWeight={"bold"}>
            Effortless and simple. The features you need.
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
            backgroundColor: device
              ? "transparent"
              : alpha(theme.palette.background.paper, 0.15),
            padding: device ? theme.spacing(0, 4) : theme.spacing(3, 40),
            mt: device ? 0 : 2,
          }}
        >
          <FeaturesDisplay />
        </Box>
      </Box>
    </section>
  );
};

export default Features;
