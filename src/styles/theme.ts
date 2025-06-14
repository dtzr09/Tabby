import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    background: {
      default: "#171717",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#7F7F7F",
    },
  },
});

export default theme;
