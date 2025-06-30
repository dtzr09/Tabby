import {
  AccordionDetails,
  AccordionSummary,
  alpha,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { Add } from "@mui/icons-material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { descriptionFontSize, titleFontSize } from "@/styles/static";

export interface AppAccordionProps {
  title?: string;
  content?: string | React.ReactNode;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "15px",
  padding: theme.spacing(1),
  transition: "background-color 0.2s ease",

  "&:hover": {
    backgroundColor: alpha("#504C4C", 0.7),
    cursor: "pointer",
  },
  "&.Mui-expanded": {
    backgroundColor: alpha("#ffffff", 0.2), // or any color you prefer
  },
}));

const AppAccordion: React.FC<AppAccordionProps> = ({ title, content }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<Add />}>
        <Typography variant="h6" fontSize={titleFontSize}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="subtitle2" fontSize={descriptionFontSize}>
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AppAccordion;
