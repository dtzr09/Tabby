import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const features = [
  {
    title: "Track expenses in chat.",
    description:
      "No new app needed. Just send a message – Tabby logs your spending instantly, like texting a friend.",
    image: "assets/images/track_expenses.png",
  },
  {
    title: "Split group expenses.",
    description:
      "Whether it’s a house party, dinner out, or travel – Tabby keeps track of who paid and who owes what – no awkward reminders.",
    image: "assets/images/split_group_expenses.png",
  },
  {
    title: "Learns as you go.",
    description:
      "Tabby remembers your habits. Mark 'McD' as food once – Tabby will remember and auto-categorize it next time you log it.",
    image: "assets/images/learns_as_you_go.png",
  },
  {
    title: "Quick add & edit.",
    description:
      "Fix typos or update entries with a simple command – no complex UI, just fast fixes.",
    image: "assets/images/quick_add_edit.png",
  },
];

interface CustomDotProps {
  onClick: () => void;
  onMove?: () => void;
  index: number;
  active: boolean;
  carouselState: {
    currentSlide: number;
    deviceType: string;
  };
}

const FeatureCarousel = () => {
  const theme = useTheme();
  const CustomDot: React.FC<CustomDotProps> = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <Box
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
        sx={{
          backgroundColor: active
            ? theme.palette.primary.main
            : theme.palette.grey[400],
          borderRadius: "100%",
          width: "8px",
          height: "8px",
          margin: "0 5px",
        }}
      />
    );
  };

  return (
    <Carousel
      responsive={{
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
      swipeable={true}
      draggable={false}
      showDots={true}
      ssr={true}
      infinite={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      customDot={
        <CustomDot
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          index={0}
          active={false}
          carouselState={{
            currentSlide: 0,
            deviceType: "",
          }}
        />
      }
    >
      {features.map((feature, idx) => (
        <Box
          key={idx}
          p={2}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Typography variant="body1" fontWeight={"bold"}>
            {feature.title}
          </Typography>
          <Typography variant="body2">{feature.description}</Typography>
        </Box>
      ))}
    </Carousel>
  );
};

export default FeatureCarousel;
