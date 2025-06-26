import LaunchTabbyButton from "@/components/core/LaunchTabbyButton";
import { useMobile } from "@/hooks/useMobile";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function AppBlogNavbar() {
  const { device } = useMobile();
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          height: 40,
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
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
      <LaunchTabbyButton sx={{ marginTop: 0 }} reduceSize={true} />
    </Box>
  );
}

export default AppBlogNavbar;
