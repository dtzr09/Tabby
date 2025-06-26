import { useMobile } from "@/hooks/useMobile";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import AppAccordion from "../core/AppAccordion";

const faqs = [
  {
    title: "Is Tabby free to use?",
    description:
      "Yes! Tabby is free to use — and we plan to keep core features free forever 😺  Right now, you’ll enjoy everything at no cost while we’re in beta!",
  },
  {
    title: "Can I track multiple groups or trips?",
    description:
      "Absolutely! As a Beta user, you can create as many groups as you like — whether it’s a ‘Japan Trip’ or ‘Housemates’. Tabby keeps everything neat, separate, and in sync 🧳🏠💸.",
  },
  {
    title: "Can I change how Tabby categorizes stuff?",
    description:
      "Totally. If Tabby gets a category wrong or you just want to switch things up, you can easily reassign categories anytime using the settings command. Tabby learns from your preferences too.",
  },
  {
    title: "What gets synced to Notion?",
    description:
      "All your logged expenses — including amount, description, category, who paid and who owes — are synced in real time to your linked Notion page. It's your personal finance dashboard, auto-updated.",
  },
  {
    title: "What if I mess up an expense?",
    description:
      "No worries! You can edit or delete any expense anytime. You’ll be able to update the description and category. For other changes, simply delete and re-add the expense. More flexibility coming your way soon — stay tuned for updates!",
  },
  {
    title: "What if I missed logging an older expense?",
    description:
      "Yes! Just add the date at the end in DD/MM format - like 10 lunch 30/5. Tabby will take care of the rest, no matter when the expense happened.",
  },
  {
    title: "How do I invite more people to share expenses?",
    description:
      "You can add more members to your group anytime! As long as they’re admins in your Telegram group, just use `/addmembers` to get them set up with Tabby.",
  },
  {
    title: "Can I make partial payments when settling debt?",
    description:
      "Absolutely! Just specify the amount you’re paying, and Tabby will keep track of what’s left. No need to settle everything at once.",
  },
  {
    title: "How many Notion templates do we offer?",
    description:
      "Three — and they’ve got you covered! One’s for your personal spending, another’s for epic group travels, and the last one handles everyday group expenses (think housemates or team lunches). Tabby picks the right one for you when you sign up — no guesswork needed. More templates are on the way, and soon, you’ll get to choose your favorite!",
  },
  {
    title: "What if I have more questions?",
    description: (
      <>
        We’re here to help! You can reach us anytime at{" "}
        <a
          href="mailto:tabbybot.expenses@gmail.com"
          style={{
            fontWeight: "bold",
          }}
        >
          tabbybot.expenses@gmail.com
        </a>
        . We’re always happy to assist! We’re also setting up a Telegram support
        chat for added convenience.
      </>
    ),
  },
];

const Faqs = () => {
  const theme = useTheme();
  const { device } = useMobile();
  const half = Math.ceil(faqs.length / 2);

  return (
    <section id="faqs" style={{ height: "100%", padding: theme.spacing(6, 0) }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(1),
          padding: device ? theme.spacing(0, 4) : theme.spacing(0, 40),
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight={600}>
            FAQ
          </Typography>
          <Typography variant="h6" color={theme.palette.text.secondary} mt={1}>
            Everything you need to know, in one place.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(1),
            justifyContent: "center",
            mt: device ? 2 : 4,
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="flex-start"
          >
            {/* Column 1 */}
            {device ? (
              <Grid size={12}>
                <Box display="flex" flexDirection="column" gap={1}>
                  {faqs.map((faq, idx) => (
                    <AppAccordion
                      key={idx}
                      title={faq.title}
                      content={faq.description}
                    />
                  ))}
                </Box>
              </Grid>
            ) : (
              <Grid size={6}>
                <Box display="flex" flexDirection="column" gap={1}>
                  {faqs.slice(0, half).map((faq, idx) => (
                    <AppAccordion
                      key={idx}
                      title={faq.title}
                      content={faq.description}
                    />
                  ))}
                </Box>
              </Grid>
            )}

            {/* Column 2 */}
            {!device && (
              <Grid size={6}>
                <Box display="flex" flexDirection="column" gap={1}>
                  {faqs.slice(half).map((faq, idx) => (
                    <AppAccordion
                      key={idx + 4}
                      title={faq.title}
                      content={faq.description}
                    />
                  ))}
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default Faqs;
