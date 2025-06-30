import { useMobile } from "@/hooks/useMobile";
import { descriptionFontSize, titleFontSize } from "@/styles/static";
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
    description: "Tabby learns your tags - mark it once, and it's remembered.",
    image: "assets/images/learns_as_you_go.png",
  },
  {
    title: (
      <>
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
      </>
    ),
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
      "A clear view of what you and your group have spent and earned, with clear breakdowns.",
    image: "assets/images/stats.png",
  },
  {
    title: "View & track expenses",
    description:
      "Browse all your group and personal expenses, or search by category, date, or keyword - all in one view.",
    image: "assets/images/viewexpenses.png",
  },
];

const FeaturesDisplay = () => {
  const { device } = useMobile();
  const theme = useTheme();

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      {features.map((feature, idx) => (
        <Grid
          // size={device ? 12 : 4}
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 4,
          }}
          key={idx}
          sx={{
            "@media (min-width:1536px) and (max-width:1800px)": {
              flexBasis: "33.33%",
              maxWidth: "32%",
            },
            [theme.breakpoints.up("xl")]: {
              flexBasis: "25%",
              maxWidth: "24%",
            },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                p: {
                  xs: theme.spacing(1, 5),
                  sm: theme.spacing(1, 10),
                  md: 2,
                  xl: theme.spacing(0, 2),
                },
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                "@media (min-width:1536px) and (max-width:2360px)": {
                  p: 1,
                },
              }}
            >
              <img
                src={feature.image}
                alt={typeof feature.title === "string" ? feature.title : ""}
                style={{
                  width: "100%",
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
                      "@media (min-width:1536px) and (max-width:2200px)": {
                        p: theme.spacing(2, 1),
                      },
                    }
                  : {}),
                minHeight: {
                  sm: theme.spacing(18),
                  md: theme.spacing(20),
                  xl: theme.spacing(24),
                },
                maxWidth: {
                  xs: theme.spacing(70),
                  lg: theme.spacing(56),
                  xl: theme.spacing(65),
                },
                p: {
                  xs: theme.spacing(2, 4),
                  md: theme.spacing(1, 0),
                  sm: theme.spacing(2, 0),
                  xl: theme.spacing(2, 1),
                },
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography
                variant="body1"
                fontWeight={"bold"}
                fontSize={titleFontSize}
              >
                {feature.title}
              </Typography>
              <Typography variant="body1" fontSize={descriptionFontSize}>
                {feature.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturesDisplay;
