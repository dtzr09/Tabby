import { useMobile } from "@/hooks/useMobile";
import {
  blogContentFontSize,
  blogNavFontSize,
  largeFontSize,
} from "@/styles/static";
import { WavingHand } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import useMeasure from "react-use-measure";
import { useMediaQuery } from "usehooks-ts";

const BlogContent = () => {
  const theme = useTheme();
  const { device } = useMobile();
  const [ref, bounds] = useMeasure();
  const belowMedium = useMediaQuery("(max-width: 800px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        width: "100%",
        gap: 2,
        "@media(max-width: 1380px)": {
          flexDirection: "column",
          position: "relative",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            lg: "column",
          },
          justifyContent: {
            xs: "center",
            lg: "left",
            // xl: "flex-start",
          },
          gap: 1,
          maxWidth: {
            xs: "100vw",
            lg: "50vw",
          },
          "@media(max-width: 1380px)": {
            flexDirection: "column-reverse",
            justifyContent: "center",
            maxWidth: "100vw",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            padding: {
              xs: theme.spacing(0, 2),
              sm: theme.spacing(0, 2),
              md: theme.spacing(0, 3),
              lg: theme.spacing(0, 4),
            },
            width: {
              xs: "100vw",
              sm: "80vw",
              lg: "50vw",
            },
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
            mt: {
              xs: 3,
              md: 3,
              lg: 8,
            },
            "@media(min-width: 1200px) and (max-width: 1380px)": {
              width: "75vw",
              mt: 3,
            },
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
              borderRadius: theme.spacing(1),
            }}
          />
        </Box>

        <Typography
          variant="h1"
          fontSize={largeFontSize}
          fontWeight="bold"
          sx={{
            fontFamily: "BostonAngelBold",
            lineHeight: 1.1,
            mt: {
              xs: 2,
              sm: 2,
              md: 0,
            },
            "@media(min-width: 900px) and (max-width: 1380px)": {
              mt: 8,
            },
            padding: {
              lg: theme.spacing(0, 0, 0, 4),
            },
          }}
        >
          Why I Created Tabby?
        </Typography>
      </Box>
      <Box
        sx={{
          padding: {
            xs: theme.spacing(3, 3, 0),
            sm: theme.spacing(4, 10, 0),
            md: theme.spacing(4, 15, 0),
            lg: theme.spacing(8, 3, 0, 0),
            xl: theme.spacing(8, 40, 0, 0),
          },
          paddingBottom: `calc(${bounds.height}px + ${theme.spacing(
            10
          )}) !important`,

          "@media (min-width: 1200px) and (max-width:1380px)": {
            padding: theme.spacing(5, 20, 0, 20),
          },
          "@media (min-width:1536px) and (max-width:2015px)": {
            paddingRight: theme.spacing(4),
          },
          "@media (min-width:2015px) and (max-width:2500px)": {
            paddingRight: theme.spacing(20),
          },
          "& .MuiTypography-root": {
            fontSize: blogContentFontSize,
          },
          maxWidth: {
            xs: "100vw",
            xl: "70vw",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
          }}
        >
          {"Hi, I'm Derrick, the creator of Tabby."}
          <Box component="span" sx={{ display: "inline-block", ml: 1 }}>
            <WavingHand fontSize="small" sx={{ color: "#CB9821" }} />
          </Box>
        </Typography>
        <Stack spacing={2}>
          <Typography variant="h6">
            {
              "If you’ve ever been the go-to person for trip expenses or just like keeping things organized — you will know the pain of:"
            }
          </Typography>
          <Typography variant="h6" fontStyle="italic" color="text.secondary">
            {"Opening a separate app just to track expenses."}
          </Typography>
          <Typography variant="h6" fontStyle="italic" color="text.secondary">
            {"Questions like “Who paid for this?” or “How much do I owe?”"}
          </Typography>
          <Typography variant="h6" fontStyle="italic" color="text.secondary">
            {"Crumpled receipts, bank app scrolling, and messy Excel sheets."}
          </Typography>

          <Typography variant="h6">
            {
              "During a two-week grad trip to New Zealand, my friends and I were too busy exploring to track spending. Flights, Airbnbs, spontaneous food stops — unforgettable moments, but the aftermath? A mess of receipts and bank logs that took hours to sort."
            }
          </Typography>

          <Typography variant="h6">
            {
              "I wanted something simpler, a tool that lived in the apps we already used daily, like Telegram. Something that felt natural, split costs easily, and synced to Notion so we could revisit our trips without the chaos."
            }
          </Typography>
          <Typography variant="h6">
            {
              "That’s how Tabby was born, a lightweight, chat-based way to track and split expenses where the conversation already happens."
            }
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {
              "No switching apps. No lost receipts. Just better memories - organized where it matters."
            }
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
          <Typography variant="h6">
            {
              "And if you’re not planning a trip? That’s okay - it fits into everyday life just as well."
            }
          </Typography>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            width: {
              xs: "auto",
              md: "auto",
            },
            bottom: {
              xs: 0,
              sm: 0,
              xl: theme.spacing(2),
            },
            right: {
              xs: 0,
              xl: theme.spacing(4),
            },
            "@media (min-width:1200px) and (max-width:1380px)": {
              left: 0,
              right: "auto",
            },
            "@media (min-width:1536px) and (max-width:1780px)": {
              left: 0,
              right: "auto",
            },
            "@media(min-width: 800px) and (max-width: 1380px)": {
              position: "absolute",
              bottom: 0,
              right: 0,
              left: "auto",
            },
            padding: {
              xs: theme.spacing(3),
              md: theme.spacing(3, 6),
              lg: 0,
            },
            display: "flex",
            justifyContent: device ? "flex-end" : "space-between",
            alignItems: "center",
            gap: 4,
            "& .MuiTypography-root": {
              fontSize: blogNavFontSize,
            },
            textAlign: "right",
          }}
        >
          <Typography
            variant={device ? "body2" : "body1"}
            fontSize={"inherit"}
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
            ref={ref}
            variant={device ? "body2" : "body1"}
            fontSize={"inherit"}
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
            {"Tabby's Roadmap"}
          </Typography>
          {!belowMedium && (
            <Typography
              variant={"body1"}
              fontSize={"inherit"}
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
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogContent;
