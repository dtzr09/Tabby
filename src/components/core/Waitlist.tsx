import { useMobile } from "@/hooks/useMobile";
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
  const [handler, setHandler] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { device } = useMobile();

  const handleSubmit = async () => {
    if (!handler.trim()) {
      setError("Telegram handle is required.");
      return;
    }
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxwcBOvnecXcGwOMoNANuZTagd35kWKZqHTHZDnXDQhMjnRhFjTeXoLKpkhbglKHaU/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ handler }),
      }
    );

    const text = await response.text();
    if (text.toLowerCase() === "success") {
      setHandler("");
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
          padding: device ? theme.spacing(1, 2) : theme.spacing(1, 3),
          marginRight: device ? 0 : theme.spacing(1),
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
        <Typography variant="button" sx={{ textTransform: "none" }}>
          Join Waitlist
        </Typography>
      </Button>
    );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxSizing: "border-box",
        alignItems: "center",
        marginTop: 2,
        padding: device ? theme.spacing(0, 2) : 0,
        width: "100%",
      }}
    >
      {!submitted ? (
        <FormControl fullWidth error={error !== ""}>
          <Input
            placeholder="Enter your telegram handle"
            type="text"
            fullWidth
            disableUnderline
            value={handler}
            onChange={(e) => {
              setHandler(e.target.value);
              if (error !== "") setError(""); // Clear error on input change
            }}
            sx={{
              border: `1px solid ${
                error !== ""
                  ? theme.palette.error.main
                  : alpha(theme.palette.background.paper, 0.8)
              }`,
              borderRadius: theme.spacing(1),
            }}
            inputProps={{
              style: {
                padding: theme.spacing(1.5, 2),
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
                      backgroundColor: alpha(theme.palette.text.secondary, 0.8),
                      color: alpha(theme.palette.background.default, 0.8),
                      cursor: "not-allowed",
                    },
                    borderRadius: theme.spacing(0, 1, 1, 0),
                  }}
                >
                  <Typography variant="button" sx={{ textTransform: "none" }}>
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
      <Box
        sx={{
          display: "flex",
          gap: 0.5,
          alignItems: "center",
          textAlign: "center",
          color: theme.palette.text.secondary,
        }}
      >
        <Typography variant="caption">Follow @taydev_io for updates</Typography>
        <OpenInNew
          fontSize="small"
          onClick={() => window.open("https://x.com/taydev_io", "_blank")}
          sx={{
            fontSize: theme.typography.caption.fontSize,
          }}
          cursor="pointer"
        />
      </Box>
    </Box>
  );
};

export default Waitlist;
