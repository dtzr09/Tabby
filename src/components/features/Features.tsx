import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FeatureCarousel from "./FeaturesCarousel";

export interface FeaturesProps {
  navbarHeight?: number;
}
const Features = (props: FeaturesProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        padding: theme.spacing(4),
        minHeight: `calc(100vh - ${props.navbarHeight || 0}px)`,
        gap: theme.spacing(2),
      }}
    >
      <Typography variant="h6" fontWeight={"bold"}>
        No fluff. Just features.
      </Typography>
      <Typography variant="h4" fontWeight={"bold"}>
        Less admin. More adventures.
      </Typography>
      <Typography variant="body1" color={theme.palette.text.secondary}>
        Tabby fits right into your daily chats - so you can track, split, and
        move on with life.
      </Typography>
      <FeatureCarousel />
    </Box>
  );
};

export default Features;
