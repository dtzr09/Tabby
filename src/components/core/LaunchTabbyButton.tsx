import { Typography, useTheme } from "@mui/material";
import React from "react";

export interface LaunchTabbyButtonProps {
  sx?: React.CSSProperties;
  reduceSize?: boolean;
}
const LaunchTabbyButton = (props: LaunchTabbyButtonProps) => {
  const theme = useTheme();
  return (
    <button
      style={{
        padding: props.reduceSize ? theme.spacing(1, 2) : theme.spacing(1, 3),
        backgroundColor: theme.palette.primary.main,
        width: "fit-content",
        color: "#fff",
        border: "none",
        borderRadius: theme.spacing(1),
        cursor: "pointer",
        marginTop: theme.spacing(4),
        // textDecoration: "uppercase",
        ...props.sx,
      }}
      onClick={() => {
        const el = document.getElementById("pricing");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <Typography
        variant={props.reduceSize ? "body2" : "body1"}
        sx={{ color: "#fff" }}
        onClick={() => window.open("https://t.me/divydbot", "_blank")}
      >
        Launch Tabby
      </Typography>
    </button>
  );
};

export default LaunchTabbyButton;
