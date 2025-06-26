import { useMobile } from "@/hooks/useMobile";
import { WavingHand } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import useMeasure from "react-use-measure";

const BlogContent = () => {
  const theme = useTheme();
  const { device } = useMobile();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: device ? "column" : "row",
        width: "100%",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: device ? "column-reverse" : "column",
          alignItems: "left",
          gap: 1,
          pl: device ? 0 : theme.spacing(2),
          maxWidth: device ? "100vw" : "50%",
        }}
      >
        <Box
          sx={{
            padding: device ? theme.spacing(0, 3) : 0,
            width: device ? "100vw" : 900,
            height: device ? theme.spacing(45) : 600,
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
            mt: device ? 0 : 8,
          }}
        >
          <img
            src="/assets/images/why_create_tabby.jpeg"
            alt="Why I created Tabby"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "bottom center", // focus on lower part
              borderRadius: device ? 5 : 2,
            }}
          />
        </Box>
        <Typography
          variant="h1"
          fontSize={device ? 58 : 120}
          fontWeight="bold"
          sx={{
            fontFamily: "BostonAngelBold",
            lineHeight: 1.1,
            textAlign: device ? "center" : "left",
            mt: device ? 2 : 0,
            padding: device ? theme.spacing(0, 1) : 0,
          }}
        >
          Why I Created Tabby?
        </Typography>
      </Box>
      <Box
        sx={{
          padding: device ? theme.spacing(4, 3) : theme.spacing(8, 30, 0, 6),
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: "bold",
          }}
        >
          Hi, I'm Derrick, the creator of Tabby.{" "}
          <WavingHand
            fontSize="small"
            sx={{
              color: "#CB9821",
            }}
          />
        </Typography>

        <Stack spacing={2}>
          <Typography variant="h6">
            If you’ve ever been the go-to person for trip expenses or just like
            keeping things organized — you will know the pain of:
          </Typography>
          <Typography variant="h6" fontStyle="italic" color="text.secondary">
            Opening a separate app just to track expenses.
          </Typography>
          <Typography variant="h6" fontStyle="italic" color="text.secondary">
            Questions like “Who paid for this?” or “How much do I owe?”
          </Typography>
          <Typography variant="h6" fontStyle="italic" color="text.secondary">
            Crumpled receipts, bank app scrolling, and messy Excel sheets.
          </Typography>

          <Typography variant="h6">
            During a two-week grad trip to New Zealand, my friends and I were
            too busy exploring to track spending. Flights, Airbnbs, spontaneous
            food stops — unforgettable moments, but the aftermath? A mess of
            receipts and bank logs that took hours to sort.
          </Typography>

          <Typography variant="h6">
            I wanted something simpler, a tool that lived in the apps we already
            used daily, like Telegram. Something that felt natural, split costs
            easily, and synced to Notion so we could revisit our trips without
            the chaos.
          </Typography>
          <Typography variant="h6">
            That’s how Tabby was born, a lightweight, chat-based way to track
            and split expenses where the conversation already happens.
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            No switching apps. No lost receipts. Just better memories —
            organized where it matters.
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            For the{" "}
            <Box component="span" textTransform="uppercase" fontWeight="bold">
              treasurer,
            </Box>{" "}
            the{" "}
            <Box component="span" textTransform="uppercase" fontWeight="bold">
              planner
            </Box>{" "}
            , and the{" "}
            <Box component="span" textTransform="uppercase" fontWeight="bold">
              nostalgic,
            </Box>{" "}
            one in every group, Tabby was built with you in mind.
          </Typography>
        </Stack>
        <Box
          sx={{
            position: device ? "block" : "absolute",
            width: device ? "100%" : "auto",
            bottom: device ? "unset" : 0,
            right: 0,
            padding: device ? theme.spacing(4, 0, 0) : theme.spacing(3, 6),
            display: "flex",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Typography
            variant={device ? "body2" : "body1"}
            fontFamily={"Agrandir"}
            textTransform="uppercase"
            onClick={() => (window.location.href = "/")}
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
                animation: "none",
              },
              animation: `pulse 5s ease-in-out infinite`,
            }}
          >
            Home
          </Typography>
          <Typography
            variant={device ? "body2" : "body1"}
            fontFamily={"Agrandir"}
            textTransform="uppercase"
            onClick={() => (window.location.href = "/roadmap")}
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
                animation: "none",
              },
              animation: `pulse 5s ease-in-out infinite`,
            }}
          >
            Tabby's Roadmap
          </Typography>
          <Typography
            variant={device ? "body2" : "body1"}
            fontFamily={"Agrandir"}
            textTransform="uppercase"
            onClick={() =>
              (window.location.href = "mailto:tabbybot.expenses@gmail.com")
            }
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
                animation: "none",
              },
              animation: `pulse 5s ease-in-out infinite`,
            }}
          >
            tabbybot.expenses@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogContent;
