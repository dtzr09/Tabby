import React from "react";
import { alpha, Box, Chip, Typography, useTheme } from "@mui/material";
// import LaunchTabbyButton from "../core/LaunchTabbyButton";
import { useMobile } from "@/hooks/useMobile";
import personas from "@/utils/personas";
import Waitlist from "../core/Waitlist";
import useMeasure from "react-use-measure";
import {
  descriptionFontSize,
  headerFontSize,
  subHeaderFontSize,
} from "@/styles/static";

export interface HeroProps {
  navbarHeight?: number;
}

const Hero = ({ navbarHeight }: HeroProps) => {
  const theme = useTheme();
  const { device } = useMobile();
  const [ref, bounds] = useMeasure();

  return (
    <Box
      sx={{
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        height: "100%",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "column",
          lg: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        textAlign: {
          xs: "center",
          md: "center",
          lg: "left",
        },
        width: "100%",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: {
            xs: 280,
            sm: 360,
            md: 400,
            lg: 420,
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/images/tabby_hero.png"
          alt="Hero"
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: {
            xs: "100%",
            md: "100%",
            lg: "40%",
          },
          alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          },
          gap: {
            xs: 1,
            sm: 1,
            md: 2,
            xl: 3,
          },
        }}
      >
        <Box
          sx={{
            p: {
              md: theme.spacing(1, 0),
              xl: 0,
            },
            display: "flex",
            flexDirection: "column",
            gap: {
              xs: 1,
            },
          }}
        >
          <Typography
            variant={device ? "h6" : "h5"}
            fontWeight="bold"
            sx={{
              color: "#CB9821",
            }}
          >
            Track with Tabby – like texting your wallet.
          </Typography>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: headerFontSize,
            }}
          >
            Track every expense.
          </Typography>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: headerFontSize,
            }}
          >
            Solo or squad.
          </Typography>
          <Box ref={ref}>
            <Typography
              variant={device ? "body1" : "h6"}
              sx={{
                color: theme.palette.text.secondary,
                padding: device ? theme.spacing(1) : 0,
                fontSize: subHeaderFontSize,
              }}
            >
              Tabby is built for real-life spending – simple for one, smart for
              groups, and fun all around.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            overflow: "hidden",
            width: "100%",
            maxWidth: {
              xs: "100%",
              lg: bounds.width || "100%",
              xl: bounds.width || "100%",
            },
            position: "relative", // important
            "&::-webkit-scrollbar": { display: "none" },
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
                  fontSize: descriptionFontSize,
                }}
              />
            ))}
          </Box>
        </Box>
        {/* <LaunchTabbyButton
          sx={{
            marginTop: 12,
          }}
        /> */}
        <Waitlist />
      </Box>
    </Box>
  );
};

export default Hero;
