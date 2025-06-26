import { Box, useTheme } from "@mui/material";
import React from "react";
import BlogContent from "./BlogContent";
import AppBlogNavbar from "../../components/core/AppBlogNavbar";

function BlogPage() {
  const theme = useTheme();
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
