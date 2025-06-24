import { useMobile } from "@/hooks/useMobile";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const features = [
  {
    title: "Track expenses in chat.",
    description:
      "No new app needed. Just send a message - Tabby logs your spending instantly, like texting a friend.",
    image: "assets/images/track_expenses.png",
  },
  {
    title: "Split group expenses.",
    description:
      "Whether it’s a house party, dinner out, or travel - Tabby keeps track of who paid and who owes what - no awkward reminders.",
    image: "assets/images/split_group_expenses.png",
  },
  {
    title: "Set It Once. Tabby Remembers.",
    description:
      "Tabby remembers your habits. Mark 'McD' as food once - Tabby will remember and auto-categorize it next time you log it.",
    image: "assets/images/learns_as_you_go.png",
  },
  {
    title: "Notion",
    description:
      "No manual copy-pasting - just link Tabby to Notion and you're set.",
    image: "assets/images/sync_to_notion.png",
  },
  {
    title: "Settle debts easily",
    description:
      "See who owes who and settle up with just a few taps. No more awkward money talk!",
    image: "assets/images/settledebt.png",
  },
  {
    title: "Stats snapshot",
    description:
      "A clear view of what you and your group have spent and earned, with clear breakdowns by category and members.",
    image: "assets/images/stats.png",
  },
  {
    title: "View & track expenses",
    description:
      "Browse all your group and personal expenses, or search by category, date, or keyword — all in one view.",
    image: "assets/images/viewexpenses.png",
  },
];

const FeaturesDisplay = () => {
  const { device } = useMobile();
  const theme = useTheme();
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      {features.map((feature, idx) => (
        <Grid size={device ? 12 : 4} key={idx}>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: device ? 3 : 0,
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: !device ? "400px" : undefined,
                height: "100%",
                p: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box
              sx={{
                ...(!device
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      p: theme.spacing(0, 6),
                    }
                  : {}),
              }}
            >
              {feature.title == "Notion" ? (
                <Typography variant="body1" fontWeight={"bold"}>
                  Sync with our{" "}
                  <a
                    href="https://pumped-bearberry-47b.notion.site/Viewing-Tabby-Travel-Ledger-21c02ae98613800e853ecf04dc8ccc25?source=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "underline !important",
                    }}
                  >
                    Notion template
                  </a>{" "}
                  effortlessly.
                </Typography>
              ) : (
                <Typography variant="body1" fontWeight={"bold"}>
                  {feature.title}
                </Typography>
              )}
              <Typography variant="body1">{feature.description}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturesDisplay;
