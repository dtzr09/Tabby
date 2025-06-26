import { Box, Typography } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCoffee, faRobot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        mt: 2,
      }}
    >
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          textAlign: "center",
        }}
      >
        Made with{" "}
        <FontAwesomeIcon icon={faHeart} style={{ color: "#e25555" }} /> and{" "}
        <FontAwesomeIcon icon={faCoffee} style={{ color: "#fff" }} /> for the
        Telegram and Notion communities.
      </Typography>
      <Typography variant="caption" color="text.secondary">
        © 2025 TabbyBot{" "}
        <FontAwesomeIcon icon={faRobot} style={{ color: "#fff" }} />. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
