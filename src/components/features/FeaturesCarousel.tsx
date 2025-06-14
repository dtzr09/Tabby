import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const features = [
  {
    title: "Track expenses in chat.",
    description:
      "No new app needed. Just send a message – Tabby logs your spending instantly, like texting a friend.",
  },
  {
    title: "Split group expenses.",
    description:
      "Whether it’s a house party, dinner out, or travel – Tabby keeps track of who paid and who owes what – no awkward reminders.",
  },
  {
    title: "Learns as you go.",
    description:
      "Tabby remembers your habits. Mark 'McD' as food once – Tabby will remember and auto-categorize it next time you log it.",
  },
  {
    title: "Quick add & edit.",
    description:
      "Fix typos or update entries with a simple command – no complex UI, just fast fixes.",
  },
];

const FeatureCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <>
      <Box
        sx={{
          width: "80vw",
          maxWidth: 320,
          minHeight: 300,
          bgcolor: "#222",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Box
          sx={{
            width: 180,
            height: 140,
            bgcolor: "#999",
            borderRadius: 2,
            mb: 2,
          }}
        />
        <Typography fontWeight={600}>{features[index].title}</Typography>
        <Typography variant="body2" mt={1} color="gray">
          {features[index].description}
        </Typography>
      </Box>

      <Box display="flex" gap={2} mt={4}>
        <Button variant="outlined" onClick={handlePrev}>
          ◀︎ Prev
        </Button>
        <Button variant="outlined" onClick={handleNext}>
          Next ▶︎
        </Button>
      </Box>
    </>
  );
};

export default FeatureCarousel;
