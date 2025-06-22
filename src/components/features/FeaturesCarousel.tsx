import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomButtonGroup } from "./customButtonGroups";
import { useMobile } from "@/hooks/useMobile";

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
  {
    title: "Sync with Notion effortlessly.",
    description:
      "Connect Tabby to Notion and log every expense into your personal dashboard automatically. No manual copy-pasting — just link once and you're set.",
    image: "assets/images/sync_to_notion.png",
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
  const { device } = useMobile();
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
          borderRadius: active ? "40%" : "100%",
          width: active ? theme.spacing(3) : theme.spacing(1),
          height: "8px",
          margin: "0 5px",
          transition: "all 300ms ease-in-out",
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
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
      swipeable={false}
      draggable={false}
      showDots={true}
      ssr={true}
      infinite={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={[
        "desktop",
        "superLargeDesktop",
        "tablet",
        "mobile",
      ]}
      dotListClass="custom-dot-list-style"
      customButtonGroup={
        <CustomButtonGroup
          next={() => {}}
          previous={() => {}}
          goToSlide={() => {}}
          carouselState={{
            totalItems: features.length,
            currentSlide: 0,
            deviceType: "",
          }}
        />
      }
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
            flexDirection: device ? "column" : "row",
            alignItems: "center",
            mb: device ? 3 : 0,
          }}
        >
          {device && (
            <Box
              sx={{
                width: "100%",
                minHeight: "400px",
                maxWidth: !device ? "500px" : undefined,
                height: "100%",
                p: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          )}
          <Box
            sx={{
              ...(!device
                ? {
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    gap: 1,
                    p: theme.spacing(0, 6),
                  }
                : {}),
            }}
          >
            <>
              <Typography variant={device ? "body1" : "h4"} fontWeight={"bold"}>
                {feature.title}
              </Typography>
              <Typography variant={device ? "body2" : "h5"}>
                {feature.description}
              </Typography>
            </>
          </Box>
          {!device && (
            <Box
              sx={{
                width: "100%",
                minHeight: "400px",
                maxWidth: !device ? "400px" : undefined,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          )}
        </Box>
      ))}
    </Carousel>
  );
};

export default FeatureCarousel;
