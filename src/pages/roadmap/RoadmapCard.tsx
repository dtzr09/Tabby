import { useMobile } from "@/hooks/useMobile";
import { descriptionFontSize, titleFontSize } from "@/styles/static";
import { white } from "@/styles/theme";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export interface RoadmapCardProps {
  title: string;
  description: string;
}
const RoadmapCard = (props: RoadmapCardProps) => {
  const theme = useTheme();
  const { device } = useMobile();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        maxWidth: 400,
        minHeight: {
          xs: "100%",
          sm: 200,
          md: 250,
          lg: 225,
        },
        gap: 1,
        padding: device ? theme.spacing(2) : theme.spacing(3),
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: white,
        marginBottom: 2,
        color: theme.palette.background.default,
      }}
    >
      <Typography
        variant={device ? "body1" : "h6"}
        fontWeight={"bold"}
        fontSize={titleFontSize}
      >
        {props.title}
      </Typography>
      <Typography variant="body2" fontSize={descriptionFontSize}>
        {props.description}
      </Typography>
    </Box>
  );
};

export default RoadmapCard;
