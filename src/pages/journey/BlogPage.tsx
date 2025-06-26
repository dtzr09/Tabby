import { Box } from "@mui/material";
import React from "react";
import BlogContent from "./BlogContent";

function BlogPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        overflowY: "auto",
        position: "relative",
      }}
    >
      <BlogContent />
    </Box>
  );
}

export default BlogPage;
