import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export interface HeroProps {
  navbarHeight?: number;
}
const Hero = (props: HeroProps) => {
  const theme = useTheme();
  console.log("Hero component rendered with navbarHeight:", props.navbarHeight);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        padding: theme.spacing(4, 2),
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Track every expense.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Solo or squad.
        </Typography>
      </Box>
      <Box>
        <img src="/assets/images/tabby_hero.png" alt="Hero" />
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.text.secondary,
        }}
      >
        Tabby is built for real-life spending - simple for one, smart for
        groups, and fun all around.
      </Typography>
      <button
        style={{
          padding: theme.spacing(1, 3),
          backgroundColor: theme.palette.primary.main,
          width: "fit-content",
          color: "#fff",
          border: "none",
          borderRadius: theme.spacing(1),
          cursor: "pointer",
          marginTop: theme.spacing(4),
        }}
        onClick={() => window.open("https://t.me/DivydBot", "_blank")}
      >
        <Typography variant="button" sx={{ color: "#fff" }}>
          Launch Tabby
        </Typography>
      </button>
    </Box>
  );
};

export default Hero;
