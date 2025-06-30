import { descriptionFontSize, navFontSize } from "@/styles/static";
import { OpenInNew } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export interface WaitlistProps {
  fromNavbar?: boolean;
  fromRoadMap?: boolean;
}
const Waitlist = (props: WaitlistProps) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx3_oghQjJVsH-1cwmKUfJS5cEVQYAArTIGtUSNKb6ILzvGq31euJX6vlWJCaFIa8AdRQ/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      }
    );

    const text = await response.text();
    if (text.toLowerCase() === "success") {
      setEmail("");
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [submitted]);

  if (props.fromNavbar || props.fromRoadMap)
    return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        sx={{
          padding: {
            xs: theme.spacing(0.5, 2),
            sm: theme.spacing(0.5, 3),
            md: theme.spacing(0.5, 2),
          },
          width: "fit-content",
          boxShadow: "none",
          borderRadius: theme.spacing(4),
        }}
        onClick={
          props.fromNavbar
            ? () => window.scrollTo({ top: 0, behavior: "smooth" })
            : () => (window.location.href = "/")
        }
      >
        <Typography
          variant="button"
          sx={{
            textTransform: "none",
            fontSize: navFontSize,
          }}
        >
          Join Waitlist
        </Typography>
      </Button>
    );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        minWidth: theme.spacing(50),
        width: "100%",
        maxWidth: {
          xs: theme.spacing(70),
          sm: theme.spacing(70),
          md: theme.spacing(80),
          lg: theme.spacing(60),
          xl: theme.spacing(70),
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "center",
          padding: {
            xs: theme.spacing(2, 1),
            sm: theme.spacing(2, 2),
            md: 0,
          },
        }}
      >
        {!submitted ? (
          <FormControl fullWidth error={error !== ""}>
            <Input
              placeholder="Enter your email address"
              type="text"
              disableUnderline
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error !== "") setError(""); // Clear error on input change
              }}
              sx={{
                border: `1px solid ${
                  error !== ""
                    ? theme.palette.error.main
                    : alpha(theme.palette.background.paper, 0.8)
                }`,
                borderRadius: theme.spacing(1),
                "&.MuiInput-root": {
                  padding: theme.spacing(1, 0, 1, 2),
                  fontSize: navFontSize,
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="small"
                    onClick={handleSubmit}
                    sx={{
                      padding: theme.spacing(1.5, 4),
                      "&.Mui-disabled": {
                        backgroundColor: alpha(
                          theme.palette.text.secondary,
                          0.8
                        ),
                        color: alpha(theme.palette.background.default, 0.8),
                        cursor: "not-allowed",
                      },
                      borderRadius: theme.spacing(0, 1, 1, 0),
                    }}
                  >
                    <Typography
                      variant="button"
                      sx={{
                        textTransform: "none",
                        fontSize: navFontSize,
                      }}
                    >
                      Join Waitlist
                    </Typography>
                  </Button>
                </InputAdornment>
              }
            />

            {error !== "" && <FormHelperText>{error}</FormHelperText>}
          </FormControl>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              backgroundColor: theme.palette.success.main,
              padding: theme.spacing(1.5, 4),
              borderRadius: 2,
              width: "fit-content",
            }}
            onClick={handleSubmit}
          >
            <Typography variant="button" sx={{ textTransform: "none" }}>
              {"🎉 You're in! Thanks for joining the waitlist."}
            </Typography>
          </Button>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 0.5,
          justifyContent: {
            xs: "center",
            md: "center",
            lg: "left",
          },
          color: theme.palette.text.secondary,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: descriptionFontSize,
          }}
        >
          Follow @taydev_io for updates
        </Typography>
        <OpenInNew
          fontSize="small"
          onClick={() => window.open("https://x.com/taydev_io", "_blank")}
          sx={{
            fontSize: "inherit",
          }}
          cursor="pointer"
        />
      </Box>
    </Box>
  );
};

export default Waitlist;
