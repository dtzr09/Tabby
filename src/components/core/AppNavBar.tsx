import React, { useEffect, useState } from "react";
import { AppBar, Box, useTheme, Typography } from "@mui/material";
import { useMobile } from "@/hooks/useMobile";
import Link from "next/link";
// import LaunchTabbyButton from "./LaunchTabbyButton";
import { alpha } from "@mui/material/styles";
import Waitlist from "./Waitlist";
import { navFontSize } from "@/styles/static";
import { useMediaQuery } from "usehooks-ts";

export interface AppNavBarProps {
  refs: (element: HTMLDivElement | null) => void;
}

export const NavLinks = [
  { label: "Features", href: "#features" },
  // { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
  { label: "Our Story", href: "/journey" },
];

const AppNavBar = (props: AppNavBarProps) => {
  const { device } = useMobile();
  const theme = useTheme();
  const [showTrackBtn, setShowTrackBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // if (device) {
      //   setShowTrackBtn(true);
      //   return;
      // }
      const featuresSection = document.querySelector("#features");
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        const shouldShow = rect.top < window.innerHeight * 0.4;
        if (shouldShow !== showTrackBtn) {
          setShowTrackBtn(shouldShow);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showTrackBtn]);

  const aboveMedium = useMediaQuery(
    `(min-width: ${theme.breakpoints.values.lg}px)`
  );

  return (
    <AppBar
      position={theme.breakpoints.down("md") ? "fixed" : "sticky"}
      sx={{
        backgroundColor: alpha("#ededed", 0.1),
        padding: device ? theme.spacing(0.5, 0.2) : theme.spacing(1, 1),
        backdropFilter: "blur(24px)",
        justifyContent: "center",
        top: aboveMedium ? theme.spacing(4) : "unset",
        bottom: aboveMedium ? "unset" : theme.spacing(2),
        left: 0,
        right: 0,
        width: "fit-content",
        borderRadius: theme.spacing(4),
        zIndex: theme.zIndex.appBar,
        mx: "auto",
        transition: theme.transitions.create(
          ["width", "padding", "border-radius"],
          {
            duration: 800,
            easing: theme.transitions.easing.easeInOut,
          }
        ),
      }}
      elevation={0}
      ref={props.refs}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: 40,
            width: 40,
            cursor: "pointer",

            ...(!device && {
              width: "100%",
              display: "flex",
              alignItems: "center",
            }),
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(null, "", window.location.pathname);
          }}
        >
          <img
            src={
              device
                ? "/assets/images/tabby_icon.png"
                : "/assets/images/tabby_logo.png"
            }
            alt="tabby_logo"
            style={{ height: "100%" }}
          />
        </Box>

        {/* {!device && ( */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              transform: showTrackBtn
                ? {
                    xs: `translate3d(-${theme.spacing(13)}, 0, 0)`,
                    sm: `translate3d(-${theme.spacing(18)}, 0, 0)`,
                    md: `translate3d(-${theme.spacing(18)}, 0, 0)`,
                  }
                : "translate3d(0, 0, 0)",
              transition: "transform 0.5s ease",
              marginLeft: {
                xs: theme.spacing(14),
                sm: theme.spacing(20),
                md: theme.spacing(22),
                lg: theme.spacing(25),
              },
              width: "max-content",
            }}
          >
            {NavLinks.map((link) => (
              <Box
                component={Link}
                href={link.href}
                key={link.label}
                sx={{
                  textDecoration: "none",
                  mx: 1,
                }}
              >
                <Typography
                  variant={device ? "body2" : "body1"}
                  fontWeight={500}
                  letterSpacing={".009em"}
                  fontSize={navFontSize}
                >
                  {link.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        {/* )} */}

        {/* {!device && ( */}
        <Box
          sx={{
            transform: showTrackBtn ? "translateY(0)" : "translateY(20px)",
            opacity: showTrackBtn ? 1 : 0,
            transition: "transform 0.5s ease, opacity 0.5s ease",
            position: "absolute",
            right: theme.spacing(0.8),
            display: showTrackBtn ? "block" : "none",
          }}
        >
          {/* <LaunchTabbyButton
            sx={{
              margin: 0,
              padding: theme.spacing(1, 2),
              borderRadius: theme.spacing(4),
            }}
            reduceSize={device || false}
          /> */}
          <Waitlist fromNavbar={true} />
        </Box>
      </Box>
    </AppBar>
  );
};

export default AppNavBar;
