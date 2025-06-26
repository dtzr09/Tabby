import AppBlogNavbar from "@/components/core/AppBlogNavbar";
import { roadMaps } from "@/utils/roadmap";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import RoadmapCard from "./RoadmapCard";
import { useMobile } from "@/hooks/useMobile";

const RoadmapPage = () => {
  const theme = useTheme();
  const { device } = useMobile();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1),
        padding: device ? theme.spacing(2, 2) : theme.spacing(2, 10),
      }}
    >
      <AppBlogNavbar />
      <Box
        sx={{
          padding: device ? 0 : theme.spacing(0, 40),
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(1),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(1),
            mt: 4,
          }}
        >
          <Typography variant="h4" fontWeight={400}>
            {"Tabby's Roadmap"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              padding: theme.spacing(2, 0),
            }}
          >
            Tabby is still in beta but we are always evolving, and we have big
            plans for the future. Your experience helps shape what it becomes.
            <br />
            <br />
            We collect and tally every feature request to make sure it aligns
            with your needs – so speak up!
          </Typography>
          <Typography variant="body1">
            Email us at{" "}
            <Box component="a" href="mailto:tabbybot.expenses@gmail.com">
              <Typography
                variant="body1"
                component="span"
                sx={{ textDecoration: "underline" }}
              >
                tabbybot.expenses@gmail.com
              </Typography>
            </Box>
            .
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: theme.spacing(2) }}>
          {roadMaps.map((roadMap, index) => (
            <Grid key={index} size={device ? 6 : 3}>
              <RoadmapCard
                title={roadMap.title}
                description={roadMap.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RoadmapPage;
