import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        mt: 2,
      }}
    >
      <Typography variant="caption" color="text.secondary">
        © 2023 Tabby. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
