import React from "react";
import { alpha, Box, Chip, Typography, useTheme } from "@mui/material";
import LaunchTabbyButton from "../core/LaunchTabbyButton";
import { useMobile } from "@/hooks/useMobile";
import personas from "@/utils/personas";

export interface HeroProps {
  navbarHeight?: number;
}

const Hero = ({ navbarHeight }: HeroProps) => {
  const theme = useTheme();
  const { device } = useMobile();

  return (
    <Box
      sx={{
        height: `calc(100vh - ${navbarHeight}px)`,
        display: "flex",
        flexDirection: device ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: device ? "center" : "left",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          height: device ? "100%" : "auto",
          width: device ? theme.spacing(35) : theme.spacing(55),
          maxHeight: device ? "500px" : "100%",
          mb: device ? theme.spacing(3) : 0,
        }}
      >
        <img
          src="/assets/images/tabby_hero.png"
          alt="Hero"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: device ? "100%" : theme.spacing(70),
          alignItems: device ? "center" : "flex-start",
          gap: device ? 1.5 : 2,
        }}
      >
        {!device && (
          <Typography
            variant={device ? "h6" : "h5"}
            fontWeight="bold"
            sx={{
              color: "#CB9821",
            }}
          >
            Track with Tabby — like texting your wallet.
          </Typography>
        )}
        <Typography variant={device ? "h4" : "h2"} fontWeight="bold">
          Track every expense.
        </Typography>
        <Typography variant={device ? "h4" : "h2"} fontWeight="bold">
          Solo or squad.
        </Typography>
        <Typography
          variant={device ? "body1" : "h6"}
          sx={{
            color: theme.palette.text.secondary,
            padding: device ? theme.spacing(2) : 0,
          }}
        >
          Tabby is built for real-life spending — simple for one, smart for
          groups, and fun all around.
        </Typography>

        <Box
          sx={{
            overflow: "hidden",
            width: "100%",
            position: "relative", // important
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              whiteSpace: "nowrap",
              animation: "scrollLeft 120s linear infinite",
            }}
          >
            {[...personas, ...personas].map((label, idx) => (
              <Chip
                key={idx}
                label={label}
                variant="outlined"
                sx={{
                  marginRight: 2,
                  backgroundColor: alpha(theme.palette.background.paper, 0.4),
                  borderColor: "transparent",
                }}
              />
            ))}
          </Box>
        </Box>
        <LaunchTabbyButton
          sx={{
            marginTop: 12,
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
