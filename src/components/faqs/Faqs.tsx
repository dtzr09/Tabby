import { useMobile } from "@/hooks/useMobile";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import AppAccordion from "../core/AppAccordion";

const faqs = [
  {
    title: "Why was Tabby created?",
    description:
      "Tracking expenses is usually a chore — switching between apps, spreadsheets, or forgetting to do it at all. Tabby was built to make tracking feel as easy as chatting with a friend. No apps. No friction. Just chat and go.",
  },
  {
    title: "Why should I use Tabby?",
    description:
      "If you've ever needed to split a bill, lost track of spending, or forgotten where your money went - Tabby’s for you. It's low-effort, fast, and lives inside your daily chat.",
  },
  {
    title: "Can I track multiple groups or trips?",
    description:
      "Yes! You can create as many groups as you need - like 'Japan Trip' or 'Housemates'. Tabby keeps your expenses organized, separated, and synced.",
  },
  {
    title: "Can I change how Tabby categorizes stuff?",
    description:
      "Totally. If Tabby gets a category wrong or you just want to switch things up, you can easily reassign or rename categories anytime using the settings command. Tabby learns from your preferences too.",
  },
  {
    title: "What gets synced to Notion?",
    description:
      "All your logged expenses — including amount, description, category, who paid and who owes — are synced in real time to your linked Notion page. It's your personal finance dashboard, auto-updated.",
  },
  {
    title: "What if I mess up an expense?",
    description:
      "No worries! You can edit or delete any expense anytime. You’ll be able to update the amount, description, and category. For other changes, simply delete and re-add the expense. More flexibility coming your way soon — stay tuned for updates!",
  },
  {
    title: "What if I missed logging an older expense?",
    description:
      "Yes! Just add the date at the end in DD/MM format—like 10 lunch 30/5. Tabby will take care of the rest, no matter when the expense happened.",
  },
];

const Faqs = () => {
  const theme = useTheme();
  const { device } = useMobile();

  return (
    <section id="faqs" style={{ height: "100%", padding: theme.spacing(6, 0) }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(1),
          padding: device ? 0 : theme.spacing(0, 40),
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight={600}>
            FAQ
          </Typography>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Everything you need to know, in one place.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(1),
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="flex-start"
          >
            {/* Column 1 */}
            <Grid size={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                {faqs.slice(0, 4).map((faq, idx) => (
                  <AppAccordion
                    key={idx}
                    title={faq.title}
                    content={faq.description}
                  />
                ))}
              </Box>
            </Grid>

            {/* Column 2 */}
            <Grid size={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                {faqs.slice(4, 8).map((faq, idx) => (
                  <AppAccordion
                    key={idx + 4}
                    title={faq.title}
                    content={faq.description}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default Faqs;
