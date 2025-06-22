import { createTheme } from "@mui/material/styles";

//logo font: Recoleta alt
const theme = createTheme({
  typography: {
    fontFamily: "Inter , sans-serif",
  },
  palette: {
    background: {
      default: "#171717",
      paper: "#504C4C",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#7F7F7F",
    },
  },
});

export const white = "#FFFAFA";

export default theme;
