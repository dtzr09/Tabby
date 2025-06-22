import * as React from "react";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { useMobile } from "@/hooks/useMobile";

const CustomLeftArrow: React.FC<{
  onClick: () => void;
  fontSize: string;
}> = ({ onClick, fontSize }) => (
  <i onClick={() => onClick()} className="custom-left-arrow">
    <ArrowLeftRounded
      fontSize="large"
      sx={{
        fontSize: fontSize,
      }}
    />
  </i>
);
const CustomRightArrow: React.FC<{
  onClick: () => void;
  fontSize: string;
}> = ({ onClick, fontSize }) => {
  return (
    <i onClick={() => onClick()} className="custom-right-arrow">
      <ArrowRightRounded
        fontSize="large"
        sx={{
          fontSize: fontSize,
        }}
      />
    </i>
  );
};

interface CustomButtonGroupProps {
  next: () => void;
  previous: () => void;
  goToSlide: (slide: number) => void;
}

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({
  next,
  previous,
}) => {
  const { device } = useMobile();
  const theme = useTheme();
  const fontSize = theme.typography.pxToRem(70);
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        bottom: device ? undefined : 0,
      }}
    >
      <CustomLeftArrow onClick={previous} fontSize={fontSize} />
      <CustomRightArrow onClick={next} fontSize={fontSize} />
    </Box>
  );
};

export { CustomLeftArrow, CustomRightArrow, CustomButtonGroup };
