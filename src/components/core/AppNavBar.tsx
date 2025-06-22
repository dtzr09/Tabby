import React, { useEffect, useState } from "react";
import { AppBar, IconButton, Box, useTheme, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useMobile } from "@/hooks/useMobile";
import Link from "next/link";
import LaunchTabbyButton from "./LaunchTabbyButton";
import { alpha } from "@mui/material/styles";

export interface AppNavBarProps {
  refs: (element: HTMLDivElement | null) => void;
}

const NavLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

const AppNavBar = (props: AppNavBarProps) => {
  const { device } = useMobile();
  const theme = useTheme();
  const [showTrackBtn, setShowTrackBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: device ? "#171717" : alpha("#ededed", 0.1),
        padding: theme.spacing(1, 1),
        ...(!device && {
          backdropFilter: "blur(24px)",
          justifyContent: "center",
          top: theme.spacing(2),
          left: 0,
          right: 0,
          mx: "auto",
          width: device ? "100%" : "fit-content",
          borderRadius: device ? 0 : theme.spacing(4),
          transition: theme.transitions.create(
            ["width", "padding", "border-radius"],
            {
              duration: 800,
              easing: theme.transitions.easing.easeInOut,
            }
          ),
        }),
      }}
      elevation={0}
      ref={props.refs}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          ...(device && {
            width: "100%",
          }),
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
              marginRight: 22,
            }),
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={
              device
                ? "/assets/images/tabby_icon.png"
                : "/assets/images/tabby_logo.png"
            }
            alt="tabby_logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        {!device && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                transform: showTrackBtn
                  ? `translate3d(-${theme.spacing(18)}, 0, 0)`
                  : "translate3d(0, 0, 0)",
                transition: "transform 0.5s ease",
              }}
            >
              {NavLinks.map((link) => (
                <Box
                  component={Link}
                  href={link.href}
                  key={link.label}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    mx: 1,
                  }}
                >
                  <Typography
                    variant={device ? "body2" : "body1"}
                    fontWeight={500}
                    letterSpacing={".009em"}
                  >
                    {link.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {!device && (
          <Box
            sx={{
              transform: showTrackBtn ? "translateY(0)" : "translateY(20px)",
              opacity: showTrackBtn ? 1 : 0,
              transition: "transform 0.5s ease, opacity 0.5s ease",
              position: "absolute",
              right: theme.spacing(1.5),
            }}
          >
            <LaunchTabbyButton
              sx={{
                margin: 0,
                padding: theme.spacing(1, 2),
                borderRadius: theme.spacing(4),
              }}
            />
          </Box>
        )}
        {device && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
        )}
      </Box>
    </AppBar>
  );
};

export default AppNavBar;
