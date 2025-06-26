import {
  alpha,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import React from "react";
import { NavLinks } from "./AppNavBar";
import useMeasure from "react-use-measure";

export interface AppNavDrawerProps {
  toggleDrawer: (state: boolean) => void;
  open: boolean;
}
const AppNavDrawer = (props: AppNavDrawerProps) => {
  const theme = useTheme();
  const [ref, bounds] = useMeasure();
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.toggleDrawer(false)}
    >
      <Box
        sx={{
          height: "100vh",
        }}
        role="presentation"
        onClick={() => props.toggleDrawer(false)}
      >
        <Box
          ref={ref}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: alpha(theme.palette.background.default, 0.6),
            backdropFilter: "blur(10px)",
            width: "100%",
            padding: theme.spacing(2, 0),
          }}
        >
          <Box
            sx={{
              height: 40,
              cursor: "pointer",
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.replaceState(null, "", window.location.pathname);
            }}
          >
            <img
              src={"/assets/images/tabby_logo.png"}
              alt="tabby_logo"
              style={{ height: "100%" }}
            />
          </Box>
        </Box>
        <List
          sx={{
            padding: theme.spacing(2, 1),
            backgroundColor: alpha(theme.palette.background.default, 0.3),
            height: `calc(100vh - ${bounds.height}px)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {NavLinks.map((link, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: alpha(theme.palette.background.default, 0.5),
                  borderRadius: 2,
                },
              }}
            >
              <ListItemButton>
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: theme.typography.h6.fontSize,
                        fontWeight: 500,
                        color: theme.palette.text.primary,
                        letterSpacing: "0.5px",
                      },
                    },
                    root: {
                      sx: {
                        padding: theme.spacing(0, 2),
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default AppNavDrawer;
