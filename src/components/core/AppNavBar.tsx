import React from "react";
import { AppBar, Toolbar, IconButton, Box, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";

export interface AppNavBarProps {
  refs: (element: HTMLDivElement | null) => void;
}

const AppNavBar = (props: AppNavBarProps) => {
  const theme = useTheme();
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#171717",
        padding: theme.spacing(1, 1),
      }}
      elevation={0}
      ref={props.refs}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
          }}
        >
          <img
            src="/assets/images/tabby_icon.png"
            alt="tabby_icon"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavBar;
